import React from 'react';

import Header from '../../components/headers/multiplication-tab/header.component';
import Footer from '../../components/footer/footer.component';
import Tab from '../../components/multiplication-tab/table/tab.component';

import NavigationBar from '../../components/navigation/navigation-bar/navigation-bar.component';

import getNodeOffsetTop from '../../utils/get-node-offset-top/get-node-offset-top';

const MultiplicationTab = props => {

    /**
     * Single state hook useState for all the state properties
     */
    const [fullState, setFullState] = React.useState({
        sticky: 0,
        display: false,
        subtract: false,
        open: false
    });

	const setOpen = () => {
		setFullState({
			...fullState,
			open: !fullState.open
		});
	};

	const hideSliderMenu = () => {
		setFullState({
			...fullState,
			open: false
		});
	};
  
    // const setSubtract = () => {
    //     console.log('setSubtract inside ===> ', fullState.subtract);
	// 	setFullState({
	// 		...fullState,
	// 		open: !fullState.subtract
	// 	});
	// };

    // const setChecked = () => {
    //     console.log('setChecked inside ===> ', fullState.display);
	// 	setFullState({
	// 		...fullState,
	// 		display: !fullState.display
	// 	});
	// };

   	/**
	 * 
	 * @param {Object} settings - passing parameter from the settings component
	 * 
	 * For details see: 
	 * https://stackoverflow.com/questions/40722382/how-to-pass-state-back-to-parent-in-react
	 */
	const getDisplay = (display) => {

		setFullState({
			...fullState,
			display: display
		});
	};

    /**
     * Returns mathematical sign for addition or subtraction
     * @return {html entity} sign code
     */
    const getSign = () => {
        return fullState.subtract ? <>&#x2212;</> : <>&#x2b;</>
    }

    /**
    * Empty all the table inputs
    * @return {void} 
    */
    const emptyInputs = () => {
        let inputs = document.getElementsByClassName('component__input');
        // console.log(typeof(inputs))
        inputs = Array.from(inputs);
        inputs.map(input => input.value = '')
    };

    /**
     * React hook useEffect for updating sticky state property
     * on display property changing
     */
    React.useEffect(() => {

        const header = document.getElementById('header-stick');
        setFullState({
            ...fullState,
            sticky: getNodeOffsetTop(header)
        })

    }, [fullState.display]);

    /**
     * React hook useEffect for stick header on scrolling
     */
    React.useEffect(() => {

        const scrollCallBack = window.addEventListener('scroll', () => {
            const header = document.getElementById('header-stick');
            // console.log('header from useEffect ===> ', header);
            if (header) {
                if (window.pageYOffset >= fullState.sticky) { //sticky) {
                    header.classList.add('sticky');
                } else {
                    header.classList.remove('sticky');
                }
            }
        });

        return () => {
            window.removeEventListener('scroll', scrollCallBack);
        };
    }, [fullState.sticky]);

    /**
    * React hook useEffect for updating sticky state property
    * on resizing
    */
    React.useEffect(() => {

        const header = document.getElementById('header-stick');
        const resizeCallBack = window.addEventListener('resize', () => {
            setFullState({
                ...fullState,
                sticky: getNodeOffsetTop(header)
            })
        });

        return () => {
            window.removeEventListener('resize', resizeCallBack);
        };
    }, [fullState.sticky]);

    /**
     * React hook useEffect for empty input when toggle addition/subtraction
     */
    React.useEffect(() => {

        emptyInputs();

    }, [fullState.subtract]);

    // console.log('fullState.display from multiplication tab component ===> ', fullState.display);
    // console.log('fullState.subtract from multiplication tab component ===> ', fullState.subtract);

    return (
        <>
        	<NavigationBar 
                open={fullState.open}
                setOpen={setOpen}
                hideSliderMenu={hideSliderMenu}
            />
            <Header
                // display={fullState.display}
                getDisplay={getDisplay}
                subtract={fullState.subtract}
                // setChecked={setChecked}
                setChecked={() =>
                    setFullState({
                        ...fullState,
                        display: !fullState.display
                    })
                }
                // setSubtract={setSubtract}
                setSubtract={() =>
                    setFullState({
                        ...fullState,
                        subtract: !fullState.subtract
                    })
                }
            />
            <Tab
                sticky={fullState.sticky}
                subtract={fullState.subtract}
                sign={getSign()}
            />
            <Footer />
        </>
    )
};

export default MultiplicationTab;