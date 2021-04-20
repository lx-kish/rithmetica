import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';

import AdditionSubtraction from './addition-subtraction.page';

/**
 * - @DONE - application should change the burger button by adding/removing css class 'is-active' on every click on it
 * 
 * - @DONE - application should show/hide the slider menu by adding/removing css class 'is-active' on every click on burger button
 * 
 * - @DONE - slider bar menu of the application should contain 2 menu items
 * 
 * - @DONE - application initially should contain 2 collapsible components
 * 
 * - @DONE - application should contain header block with 1 collapsible component
 * 
 * - @DONE - collapsible component should expand/collapse on click on the chevron icon
 *           (unit test, moved to the separate test file)
 * 
 * - @DONE - application should contain main block with 1 collapsible component
 * 
 * - @DONE - after header collapsible component "About" expanded, header block should contain 3 collapsible
 *           components, which are "About", "Math Theory", and "How it Works"
 * 
 * - @TODO - application should contain <deploy 1 collapsible in the main block>
 * 
 */
describe('Addition and Subtraction component test suit', () => {

    afterEach(cleanup);

    /**
    * - @DONE - application should change the burger button by adding/removing css class 'is-active' on every click on it 
    */
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

    /**
    * - @DONE - application should show/hide the slider menu by adding/removing css class 'is-active' on every click on burger button
    */
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

    /**
     * - @DONE - slider bar menu of the application should contain 2 menu items
     */
    it('should contain 2 menu items in slider bar component', () => {

        const { container } = render(
            <BrowserRouter>
                <AdditionSubtraction />
            </BrowserRouter>
        );

        const slidebar = container.querySelector('.slide-bar');

        expect(slidebar.querySelectorAll('.slide-bar__item').length).toBe(2);
    })

    /**
     * - @DONE - application initially should contain 2 collapsible components
     */
    it('in initial state should contain 2 collapsible components', () => {

        const { container } = render(
            <BrowserRouter>
                <AdditionSubtraction />
            </BrowserRouter>
        );

        expect(container.querySelectorAll('.collapsible').length).toBe(2);
    })

    /**
     * - @DONE - application should initially contain header block with 1 collapsible component
     */
    it('in initial state should initially contain a header block with 1 collapsible component in it', () => {

        const { container } = render(
            <BrowserRouter>
                <AdditionSubtraction />
            </BrowserRouter>
        );

        const header = container.querySelector('.header');

        expect(header.querySelectorAll('.collapsible').length).toBe(1);
    })

    /**
     * - @DONE - application should initially contain main block with 1 collapsible component
     */
    it('in initial state should initially contain a main block with 1 collapsible component in it', () => {

        const { container } = render(
            <BrowserRouter>
                <AdditionSubtraction />
            </BrowserRouter>
        );

        const main = container.querySelector('.problem__main');

        expect(main.querySelectorAll('.collapsible').length).toBe(1);
    })

    /**
     * - @DONE - after header collapsible component "About" expanded, header block should contain 3 collapsible
     *           components, which are "About", "Math Theory", and "How it Works"
     */
    it('when "About" component in the header collapsed, header block should contain just one collapsible component, which is "About"; when "About" component in the header expanded, header block should contain 3 collapsible components, which are "About", "Math Theory", and "How it Works"', () => {

        const { container, queryByText } = render(
            // const { container, debug } = render(
            <BrowserRouter>
                <AdditionSubtraction />
            </BrowserRouter>
        );

        const header = container.querySelector('.header');

        const aboutBtn = container.querySelector('#about');

        // const mathBtn = container.querySelector('#math');

        expect(queryByText('About')).toBeInTheDocument();
        expect(queryByText('Math Theory')).not.toBeInTheDocument();
        expect(queryByText('How it works')).not.toBeInTheDocument();

        // debug(mathBtn);

        expect(header.querySelectorAll('.collapsible').length).toBe(1);

        const icon = container.querySelector('label[for="about"]');

        expect(aboutBtn.checked).toBe(false);

        fireEvent.click(icon);

        expect(aboutBtn.checked).toBe(true);

        expect(header.querySelectorAll('.collapsible').length).toBe(3);

        expect(queryByText('About')).toBeInTheDocument();
        expect(queryByText('Math Theory')).toBeInTheDocument();
        expect(queryByText('How it works')).toBeInTheDocument();

        fireEvent.click(icon);

        expect(aboutBtn.checked).toBe(false);

        expect(header.querySelectorAll('.collapsible').length).toBe(1);

        expect(queryByText('About')).toBeInTheDocument();
        expect(queryByText('Math Theory')).not.toBeInTheDocument();
        expect(queryByText('How it works')).not.toBeInTheDocument();
    })

    /**
     * - @DONE - after header collapsible component "About" expanded, and "Math Theory" collapsible component expanded too, header block should contain 8 collapsible
     *           components, which are "About", "Math Theory", "Counting On", "Make A Ten", "Decomposition", "Equal Addition", "Compensation", and "How it Works"
     */
    it('after header collapsible component "About" expanded, and "Math Theory" collapsible component expanded too, header block should contain 8 collapsible components, which are "About", "Math Theory", "Counting On", "Make A Ten", "Decomposition", "Equal Addition", "Compensation", and "How it Works"', () => {

        const { container, queryByText } = render(
            // const { container, debug } = render(
            <BrowserRouter>
                <AdditionSubtraction />
            </BrowserRouter>
        );

        const header = container.querySelector('.header');

        const aboutBtn = container.querySelector('#about');

        expect(queryByText('About')).toBeInTheDocument();
        expect(queryByText('Math Theory')).not.toBeInTheDocument();
        expect(queryByText('How it works')).not.toBeInTheDocument();

        // debug(mathBtn);

        expect(header.querySelectorAll('.collapsible').length).toBe(1);

        const iconAbout = container.querySelector('label[for="about"]');

        expect(aboutBtn.checked).toBe(false);
        
        fireEvent.click(iconAbout);

        const mathBtn = container.querySelector('#math');
        
        expect(aboutBtn.checked).toBe(true);
        expect(mathBtn.checked).toBe(false);

        const iconMath = container.querySelector('label[for="math"]');
        
        fireEvent.click(iconMath);

        expect(mathBtn.checked).toBe(true);
        
        expect(header.querySelectorAll('.collapsible').length).toBe(8);
        
        expect(queryByText('About')).toBeInTheDocument();
        expect(queryByText('Math Theory')).toBeInTheDocument();
        expect(queryByText('Counting On')).toBeInTheDocument();
        expect(queryByText('Make A Ten')).toBeInTheDocument();
        expect(queryByText('Decomposing')).toBeInTheDocument();
        expect(queryByText('Equal Addition')).toBeInTheDocument();
        expect(queryByText('Compensation')).toBeInTheDocument();
        expect(queryByText('How it works')).toBeInTheDocument();
        
        fireEvent.click(iconMath);

        expect(mathBtn.checked).toBe(false);
        
        expect(header.querySelectorAll('.collapsible').length).toBe(3);
        
        expect(queryByText('About')).toBeInTheDocument();
        expect(queryByText('Math Theory')).toBeInTheDocument();
        expect(queryByText('Counting On')).not.toBeInTheDocument();
        expect(queryByText('Make A Ten')).not.toBeInTheDocument();
        expect(queryByText('Decomposing')).not.toBeInTheDocument();
        expect(queryByText('Equal Addition')).not.toBeInTheDocument();
        expect(queryByText('Compensation')).not.toBeInTheDocument();
        expect(queryByText('How it works')).toBeInTheDocument();
    })
})