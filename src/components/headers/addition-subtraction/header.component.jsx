import React from 'react';

// import IconChevronDown from '../../icons-svg/icon-chevron-down.component';

// import Toggler from '../../toggler/toggler.component';

// const content = {
//     togglerAddSubtract: {
//         toggleBox: {
//             className: 'add-subtract-toggle__box'
//         },
//         label: {
//             htmlFor: 'addition-subtraction',
//             span: {
//                 left: {
//                     className: 'header__description',
//                     text: 'addition',
//                 },
//                 right: {
//                     className: 'header__description',
//                     text: 'subtraction',
//                 }
//             }
//         },
//         input: {
//             type: 'checkbox',
//             className: 'add-subtract-toggle__input',
//             id: 'addition-subtraction',
//         }
//     }
// }

const Header = props => {

    return (

        <header className='header'>
            <h1 className='header__title'>
                Addition and Subtraction
            </h1>
            <h3 className='header__title--small'>boost your skills of addition and subtraction</h3>
            <hr className='header__hr' />
        </header>

    )
};

export default Header;