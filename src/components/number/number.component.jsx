import React from 'react';

import content from '../../table.content';

const Number = props => {
  return (
    <span className={props.className}>
      {[ ...props.number.toString() ].map((digit, index) => (
        <span className={`${content.styles[digit]}`} key={index}>
          {digit}
        </span>
      ))}
    </span>
  );
};

export default Number;