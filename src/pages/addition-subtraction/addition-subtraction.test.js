import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
// import { render, fireEvent, cleanup, screen } from '@testing-library/react';
// import { shallow, render, mount } from 'enzyme';

// import Header from './header.component';
import AdditionSubtraction from './addition-subtraction.page';


// import appMenu from '../navigation/appMenu';
// import delimeter from '../navigation/delimeter';
// import siteMenu from '../navigation/siteMenu';

// import NavigationBar from '../navigation/navigation-bar/navigation-bar.component';
// import BurgerIcon from '../navigation/burger icon/icon-burger.component';
// import SlideBar from '../navigation/slide bar/slide-bar.component';

describe('Addition and Subtraction component test suit', () => {

    afterEach(cleanup);

    it('should add/remove css class "is-active" to the burger button on every click on it', () => {

        const { container } = render(
            <BrowserRouter>
                <AdditionSubtraction />
            </BrowserRouter>
        );

        const button = container.querySelector('.burger');

        expect(button.classList.contains('is-active')).toBe(false);

        fireEvent.click(button);

        expect(button.classList.contains('is-active')).toBe(true);

        fireEvent.click(button);

        expect(button.classList.contains('is-active')).toBe(false);
    })

    it('should add/remove class "is-active" to the slide bar on every click on the burger button', () => {

        const { container } = render(
            <BrowserRouter>
                <AdditionSubtraction />
            </BrowserRouter>
        );

        const button = container.querySelector('.burger');

        const slidebar = container.querySelector('.slide-bar');

        expect(slidebar.classList.contains('is-active')).toBe(false);

        fireEvent.click(button);

        expect(slidebar.classList.contains('is-active')).toBe(true);

        fireEvent.click(button);

        expect(slidebar.classList.contains('is-active')).toBe(false);
    })

    it('should contain 2 links in slider bar component', () => {

        const { container } = render(
            <BrowserRouter>
                <AdditionSubtraction />
            </BrowserRouter>
        );

        const slidebar = container.querySelector('.slide-bar');

        // expect(slidebar.getAllByRole('link').length).toBe(2);
        expect(slidebar.getAllByRole('link').length).toBe(2);
        // expect(screen.getAllByRole('link')).toHaveAttribute('href', '/profile');

    })

    // it('should contain 10 links across component if user ID has NOT passed to props', () => {

    //     const { container } = render(
    //         <BrowserRouter>
    //             <Header />
    //         </BrowserRouter>
    //     );

    //     // const button = container.querySelector('.btn--header');

    //     expect(screen.getAllByRole('link').length).toBe(10);
    //     // expect(screen.getAllByRole('link')).toHaveAttribute('href', '/profile');

    // })


    // it('button should contain link to "/logout" if user ID HAS passed to props', () => {
    //     const props = {
    //         data: {
    //             _id: '123456789'
    //         }
    //     };

    //     const { container } = render(
    //         <BrowserRouter>
    //             <Header {...props} />
    //         </BrowserRouter>
    //     );

    //     const button = container.querySelector('.btn--header');

    //     expect(button).toHaveAttribute('href', '/logout');

    // })

    // it('button should contain link to "/signin" if user ID has NOT passed to props', () => {

    //     const { container } = render(
    //         <BrowserRouter>
    //             <Header />
    //         </BrowserRouter>
    //     );

    //     const button = container.querySelector('.btn--header');

    //     expect(button).toHaveAttribute('href', '/signin');

    // })
})


// import React from 'react';
// import { shallow } from 'enzyme';

// import AdditionSubtraction from './addition-subtraction.page';

// const setUp = (props = {}) => {
//     return shallow(<AdditionSubtraction {...props} />);
// }

// describe('AdditionSubtraction page test set', () => {

//     let component;
//     beforeEach(() => {
//         component = setUp();
//     });

//     it('Should render Header component without errors', () => {
//         const wrapper = component.find('Header');
//         expect(wrapper.length).toBe(1);
//     });

//     it('Should render Tab component without errors', () => {
//         const wrapper = component.find('Tab');
//         expect(wrapper.length).toBe(1);
//     });


//     it('Should render Footer component without errors', () => {
//         const wrapper = component.find('Footer');
//         expect(wrapper.length).toBe(1);
//     });
// })