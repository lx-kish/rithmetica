import React from 'react';

const Toggler = props => {

    return (
        <div className={props.toggleBox.className}>
            <label htmlFor={props.label.htmlFor}>
                <span className={props.label.span.left.className}>{props.label.span.left.text}</span>
                <input
                    {...props.input}
                    checked={props.checked}
                    onChange={props.onChange}
                    // type='checkbox'
                    // className='add-subtract-toggle__input'
                    // id='addition-subtraction'
                    // checked={props.subtract}
                    // onChange={() => props.setSubtract()}
                />
                <span className={props.label.span.right.className}>{props.label.span.right.text}</span>
            </label>
        </div>
    )
};

export default Toggler;