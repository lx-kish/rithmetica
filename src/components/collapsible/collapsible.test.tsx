// import React from 'react';

// import { BrowserRouter } from 'react-router-dom';
// import { render, fireEvent, cleanup } from '@testing-library/react';

// import Collapsible from './collapsible.component';

// describe('Addition and Subtraction component test suit', () => {

//     afterEach(cleanup);

//     /**
//      * - @DONE - collapsible component should expand/collapse on every click on the chevron icon
//      *           (probably unit test and should be moved into collapsible.test.js)
//      */
//     it('collapsible component should expand/collapse on every click on the chevron icon', () => {

//         const { container } = render(
//             <BrowserRouter>
//                 <Collapsible
//                     title={`Testing component`}
//                     id={`unit-test-purposes`}
//                     content={`I'm collapsible`}
//                     collapsibleClassName={`collapsible`}
//                     titleClassName={`collapsible__title collapsible__title--level-one`}
//                     iconBoxClassName={`collapsible__icon-box collapsible__icon-box--level-one`}
//                     iconClassName={`collapsible__icon--level-one`}
//                     borderBottom={true}
//                 />
//             </BrowserRouter>
//         );

//         const icon = container.querySelector('.collapsible__icon-box');

//         const button = container.querySelector('.collapsible__btn');

//         expect(button.checked).toBe(false);

//         fireEvent.click(icon);

//         expect(button.checked).toBe(true);

//         fireEvent.click(icon);

//         expect(button.checked).toBe(false);
//     })

//     /**
//      * - @DONE - collapsible component expanded should contain test text
//      */
//     it('collapsible component expanded should contain test text', () => {

//         const { container, queryByText } = render(
//             <BrowserRouter>
//                 <Collapsible
//                     title={`Testing component`}
//                     id={`unit-test-purposes`}
//                     content={`I'm collapsible`}
//                     collapsibleClassName={`collapsible`}
//                     titleClassName={`collapsible__title collapsible__title--level-one`}
//                     iconBoxClassName={`collapsible__icon-box collapsible__icon-box--level-one`}
//                     iconClassName={`collapsible__icon--level-one`}
//                     borderBottom={true}
//                 />
//             </BrowserRouter>
//         );

//         const icon = container.querySelector('.collapsible__icon-box');

//         expect(queryByText(`I'm collapsible`)).not.toBeInTheDocument();
        
//         fireEvent.click(icon);
        
//         expect(queryByText(`I'm collapsible`)).toBeInTheDocument();
        
//         fireEvent.click(icon);
        
//         expect(queryByText(`I'm collapsible`)).not.toBeInTheDocument();
//     })

// })