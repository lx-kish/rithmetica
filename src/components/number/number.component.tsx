import React from 'react';

import content from '../../table.content';

interface IProps {
  className: string;
  number: string;
};

const Number: React.FC<IProps> = props => {

  return (
    <span className={props.className}>
      {Array.from(props.number).map((digit: string, index: number) => (
        <span className={`${content.styles[parseInt(digit)]}`} key={index}>
          {digit}
        </span>
      ))}
    </span>
  );
};

export default Number;