import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';

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

    /**
     * - @DONE - after header collapsible component "About" expanded, and "Math Theory" collapsible component expanded too, header block should contain 8 collapsible
     *           components, which are "About", "Math Theory", "Counting On", "Make A Ten", "Decomposition", "Equal Addition", "Compensation", and "How it Works"
     */
     
    it('after header collapsible component "About" expanded, and "How it Works" collapsible component expanded too, header block should contain 9 collapsible components, which are "About", "Math Theory", "How it Works", "Up To Ten ", "Single Digit Operands", "Two and Single Digits", "Two Digits and Tens", "Two Digits Operands", and "Two Digits Tiding Up"', () => {

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

        const howItWorksBtn = container.querySelector('#how-it-works');
        
        expect(aboutBtn.checked).toBe(true);
        expect(howItWorksBtn.checked).toBe(false);

        const iconHowItWorks = container.querySelector('label[for="how-it-works"]');
        
        fireEvent.click(iconHowItWorks);

        expect(howItWorksBtn.checked).toBe(true);
        
        expect(header.querySelectorAll('.collapsible').length).toBe(9);
        
        expect(queryByText('About')).toBeInTheDocument();
        expect(queryByText('Math Theory')).toBeInTheDocument();
        expect(queryByText('How it works')).toBeInTheDocument();
        expect(queryByText('Up To Ten')).toBeInTheDocument();
        expect(queryByText('Single Digit Operands')).toBeInTheDocument();
        expect(queryByText('Two and Single Digits')).toBeInTheDocument();
        expect(queryByText('Two Digits and Tens')).toBeInTheDocument();
        expect(queryByText('Two Digits Operands')).toBeInTheDocument();
        expect(queryByText('Two Digits Tiding Up')).toBeInTheDocument();

        fireEvent.click(iconHowItWorks);

        expect(howItWorksBtn.checked).toBe(false);
        
        expect(header.querySelectorAll('.collapsible').length).toBe(3);

        expect(queryByText('About')).toBeInTheDocument();
        expect(queryByText('Math Theory')).toBeInTheDocument();
        expect(queryByText('How it works')).toBeInTheDocument();
        expect(queryByText('Up To Ten')).not.toBeInTheDocument();
        expect(queryByText('Single Digit Operands')).not.toBeInTheDocument();
        expect(queryByText('Two and Single Digits')).not.toBeInTheDocument();
        expect(queryByText('Two Digits and Tens')).not.toBeInTheDocument();
        expect(queryByText('Two Digits Operands')).not.toBeInTheDocument();
        expect(queryByText('Two Digits Tiding Up')).not.toBeInTheDocument();
    });

    /**
     * - @DONE - after main collapsible component "Settings" expanded, main block should contain 1 collapsible section with 1 settings row in it,
     *           and after main collapsible component Settings collapsed, main block should not contain a settings row.
     */
     
    it('after main collapsible component "Settings" expanded, main block should contain 1 collapsible section with 1 settings row in it, and after main collapsible component Settings collapsed, main block should not contain a settings row', () => {

        const { container, queryByText } = render(
            // const { container, debug } = render(
            <BrowserRouter>
                <AdditionSubtraction />
            </BrowserRouter>
        );

        const main = container.querySelector('.problem__main');

        const settingsBtn = main.querySelector('#settings');

        expect(queryByText('Settings')).toBeInTheDocument();
        expect(main.querySelector('.settings__settings-group')).not.toBeInTheDocument();

        expect(main.querySelectorAll('.collapsible').length).toBe(1);

        const iconSettings = main.querySelector('label[for="settings"]');

        expect(settingsBtn.checked).toBe(false);
        
        fireEvent.click(iconSettings);

        expect(settingsBtn.checked).toBe(true);
        expect(main.querySelector('.settings__settings-group')).toBeInTheDocument();
        expect(main.querySelectorAll('.settings__setting').length).toBe(1);
        
        fireEvent.click(iconSettings);
        
        expect(settingsBtn.checked).toBe(false);
        expect(main.querySelector('.settings__settings-group')).not.toBeInTheDocument();
        expect(main.querySelectorAll('.settings__setting').length).toBe(0);
    });

    // /**
    //  * - @DONE - after main collapsible component "Settings" expanded, main block should contain 1 settings row in it;
    //  *           then, after pressing in the ... button in the settings row, main block should contain 2 settings rows,
    //  *           and after main collapsible component "Settings" collapsed, main block should not contain a settings row,
    //  *           and after main collapsible component "Settings" expanded again, main block should still contain 2 settings rows.
    //  */
     
    // it('after main collapsible component "Settings" expanded, main block should contain 1 collapsible section with 1 settings row in it, and after main collapsible component "Settings" collapsed, main block should not contain a settings row, and after main collapsible component "Settings" expanded again, main block should still contain 2 settings rows', () => {

    //     const { container, queryByText } = render(
    //         // const { container, debug } = render(
    //         <BrowserRouter>
    //             <AdditionSubtraction />
    //         </BrowserRouter>
    //     );

    //     const main = container.querySelector('.problem__main');

    //     const settingsBtn = main.querySelector('#settings');

    //     expect(queryByText('Settings')).toBeInTheDocument();
    //     expect(main.querySelector('.settings__settings-group')).not.toBeInTheDocument();

    //     expect(main.querySelectorAll('.collapsible').length).toBe(1);

    //     const iconSettings = main.querySelector('label[for="settings"]');

    //     expect(settingsBtn.checked).toBe(false);
        
    //     fireEvent.click(iconSettings);

    //     expect(settingsBtn.checked).toBe(true);
    //     expect(main.querySelector('.settings__settings-group')).toBeInTheDocument();
    //     expect(main.querySelectorAll('.settings__setting').length).toBe(1);

    //     const setting1 = main.querySelectorAll('.settings__setting')[0];
    //     const setting1AddBtn = setting1.queryByText('add line');
        
        




    //     fireEvent.click(iconSettings);
        
    //     expect(settingsBtn.checked).toBe(false);
    //     expect(main.querySelector('.settings__settings-group')).not.toBeInTheDocument();
    //     expect(main.querySelectorAll('.settings__setting').length).toBe(0);
    // });
});