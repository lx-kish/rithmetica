import React from 'react';

import Header from '../../components/headers/multiplication-tab/header.component';
import Footer from '../../components/footer/footer.component';
import Tab from '../../components/multiplication-tab/table/tab.component';

import NavigationBar from '../../components/navigation/navigation-bar/navigation-bar.component';

import getNodeOffsetTop from '../../utils/get-node-offset-top/get-node-offset-top';
import useWindowSize from '../../utils/use-window-size/use-window-size';

interface IProps { };

const MultiplicationTab: React.FC<IProps> = props => {

    /**
     * Single state hook useState for all the state properties
     */
    const [fullState, setFullState] = React.useState({
        display: false,
        subtract: false,
        // open: false
    });

    const dimensions = useWindowSize();

    /**
    * 
    * @param {Boolean} display - passing parameter from the settings component
    * 
    * For details see: 
    * https://stackoverflow.com/questions/40722382/how-to-pass-state-back-to-parent-in-react
    */
    const getDisplay = (display: boolean): any => {

        setFullState({
            ...fullState,
            display: display
        });
    };

    /**
     * Returns mathematical sign for addition or subtraction
     * @return {html entity} sign code
     */
    const getSign = (): any => {
        return fullState.subtract ? <>&#x2212;</> : <>&#x2b;</>
    }

    /**
    * Empty all the table inputs
    * @return {void} 
    */
    const emptyInputs = (): void => {
        let inputs: any = Array.from(document.getElementsByClassName('component__input'));
        inputs.map((input: HTMLInputElement) => input.value = '')
    };

    /**
     * React hook useEffect for stick header on scrolling
     */
    React.useEffect(() => {

        const tab: any = document.getElementById('tab');
        const headerTab: any = document.getElementById('header-stick');

        let tabOffsetTop: number;

        (document as any).fonts.ready.then(() => {
            tabOffsetTop = getNodeOffsetTop(tab);
        });

        const scrollCallBack: any = window.addEventListener('scroll', () => {

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
            <NavigationBar />
            <main className='main'>
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
                    subtract={fullState.subtract}
                    sign={getSign()}
                />
            </main>
            <Footer />
        </>
    )
};

export default MultiplicationTab;