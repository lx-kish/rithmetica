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
    const [display, setDisplay] = React.useState(false);
    // const [fullState, setFullState] = React.useState({
    //     display: false,
    //     // subtract: false,
    //     // open: false
    // });

    const dimensions = useWindowSize();

    /**
    * 
    * @param {Boolean} display - passing parameter from the settings component
    * 
    * For details see: 
    * https://stackoverflow.com/questions/40722382/how-to-pass-state-back-to-parent-in-react
    */
    const getDisplay = (display: boolean): any => {

        setDisplay(display);
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
    }, [display, dimensions]);

    return (
        <>
            <NavigationBar />
            <main className='main'>
                <Header
                    getDisplay={getDisplay}
                    setChecked={() =>
                        setDisplay(!display)
                    }
                />
                <Tab />
            </main>
            <Footer />
        </>
    )
};

export default MultiplicationTab;