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

    // const showCollapsible = () => {
    //     return props.display ?
    //         <div className='collapsible__part'>
    //             <hr className='header__hr' />
    //             <p className='header__description'>
    //                 {
    //                     props.subtract ? 
    //                     `- Subtract the amount of dots under the field from the number from the left.`
    //                     : 
    //                     `- Add the amount of dots under the field to the number from the left.`
    //                 }
    //                     <br />
    //                     - Write an answer at the field above.<br />
    //                         - Right answer colors <b>white</b>.<br />
    //                             - Wrong answer colors <span className='three'><b>red</b></span>.<br />
    //                                 - Move to the next field and repeate.
    //             </p>
    //         </div>
    //         : null
    // }

    return (

        <header className='header'>
            <h1 className='header__title'>
                Addition and Subtraction
            </h1>
            <h3 className='header__title--small'>train your skill of addition and subtraction</h3>
            <hr className='header__hr' />
            {/* <div className='collapsible'>
                <h3 className='collapsible__title header__title--small'>How to use</h3>
                <input
                    type='checkbox'
                    className='collapsible__btn'
                    id='collapsible-toggle'
                    checked={props.display}
                    onChange={() => props.setChecked()}
                />
                <label htmlFor='collapsible-toggle' className='collapsible__icon-box'>
                    <IconChevronDown className='collapsible__icon' />
                </label>
                {showCollapsible()}
                <hr className='header__hr' />
                <Toggler
                    {...content.togglerAddSubtract}
                    checked={props.subtract}
                    onChange={() => props.setSubtract()}
                />
                <hr className='header__hr' />
            </div> */}
        </header>

    )
};

export default Header;