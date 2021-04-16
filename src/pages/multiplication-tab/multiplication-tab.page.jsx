import React from 'react';

import Header from '../../components/headers/multiplication-tab/header.component';
import Footer from '../../components/footer/footer.component';
import Tab from '../../components/multiplication-tab/table/tab.component';

import NavigationBar from '../../components/navigation/navigation-bar/navigation-bar.component';
// import ShowWindowDimensions from '../../utils/use-window-size/show-window-dimensions';

import getNodeOffsetTop from '../../utils/get-node-offset-top/get-node-offset-top';
import useWindowSize from '../../utils/use-window-size/use-window-size';

const MultiplicationTab = props => {

    /**
     * Single state hook useState for all the state properties
     */
    const [fullState, setFullState] = React.useState({
        // sticky: 0,
        display: false,
        subtract: false,
        open: false
    });

    const dimensions = useWindowSize();

	// const setOpen = () => {
	// 	setFullState({
	// 		...fullState,
	// 		open: !fullState.open
	// 	});
	// };

	// const hideSliderMenu = () => {
	// 	setFullState({
	// 		...fullState,
	// 		open: false
	// 	});
	// };
  
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
	 * @param {Boolean} display - passing parameter from the settings component
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
     * React hook useEffect for stick header on scrolling
     */
    React.useEffect(() => {

        const tab = document.getElementById('tab');
        const headerTab = document.getElementById('header-stick');

        let tabOffsetTop;

        document.fonts.ready.then(() => {
            tabOffsetTop = getNodeOffsetTop(tab);
        });

        const scrollCallBack = window.addEventListener('scroll', () => {

            if (tab && headerTab) {

                const scrolledDown = window.pageYOffset >= tabOffsetTop;

                if (scrolledDown) headerTab.classList.add('sticky');
                if (!scrolledDown) headerTab.classList.remove('sticky');
            }
        });
        
        return () => {
            window.removeEventListener('scroll', scrollCallBack);
        };
    }, [fullState.display, dimensions]);

    /**
     * React hook useEffect for empty input when toggle addition/subtraction
     */
    React.useEffect(() => {

        emptyInputs();

    }, [fullState.subtract]);

    return (
        <>
        	<NavigationBar 
                // open={fullState.open}
                // setOpen={setOpen}
                // hideSliderMenu={hideSliderMenu}
            />
            {/* <ShowWindowDimensions 
                className="white description__paragraph description__paragraph--level-two"
            /> */}
            <Header
                getDisplay={getDisplay}
                subtract={fullState.subtract}
                setChecked={() =>
                    setFullState({
                        ...fullState,
                        display: !fullState.display
                    })
                }
                setSubtract={() =>
                    setFullState({
                        ...fullState,
                        subtract: !fullState.subtract
                    })
                }
            />
            <Tab
                // sticky={fullState.sticky}
                subtract={fullState.subtract}
                sign={getSign()}
            />
            <Footer />
        </>
    )
};

export default MultiplicationTab;