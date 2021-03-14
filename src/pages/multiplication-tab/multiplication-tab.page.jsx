import React from 'react';

import useClickOutside from '../../utils/use-click-outside/useClickOutside';

import Header from '../../components/headers/multiplication-tab/header.component';
import Footer from '../../components/footer/footer.component';
import Tab from '../../components/multiplication-tab/table/tab.component';

import NavigationBar from '../../components/navigation/navigation-bar/navigation-bar.component';

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

    const menuRef = React.useRef();

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
  
	// useClickOutside(menuRef, hideSliderMenu);

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
     * Returns mathematical sign for addition or subtraction
     * @return {html entity} sign code
     */
    const getSign = () => {
        return fullState.subtract ? <>&#x2212;</> : <>&#x2b;</>
    }

    /**
     * Gets and returns offsetTop of the 'header-stick' section
     * @return {Number} offsetTop
     */
    const getHeaderOffsetTop = () => {
        const header = document.getElementById('header-stick');
        if (header) {
            return header.offsetTop;
        } else {
            return null;
        }
    };

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

        setFullState({
            ...fullState,
            sticky: getHeaderOffsetTop()
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

        const resizeCallBack = window.addEventListener('resize', () => {
            setFullState({
                ...fullState,
                sticky: getHeaderOffsetTop()
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
        	<NavigationBar open={fullState.open} setOpen={setOpen} hideSliderMenu={hideSliderMenu} menuRef={menuRef} />
            <Header
                display={fullState.display}
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