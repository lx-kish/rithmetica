import React from 'react';

import content from '../../table.content';

interface IProps {
  className: string;
  number: string;
};

const Number: React.FC<IProps> = props => {
  // console.log(
  //   '%c props.number in Number component ===> ',
  //   `color: gold; font-weight: bold;`,
  //   props.number,
  //   [ ...Array.from(props.number) ],
  //   Array.from(props.number),
  //   [ ...Array(props.number) ].map((digit: string, index: number) => {console.log('%c digit inside parsing a props.number in Number component ===> ',
  //   `color: orangered; font-weight: bold;`,
  //   digit, index); return `${content.styles[parseInt(digit)]}`}));

  return (
    <span className={props.className}>
      {Array.from(props.number).map((digit: string, index: number) => (
      // {[ ...Array(props.number) ].map((digit: string, index: number) => (
      // {Array(props.number).map((digit: string, index: number) => (
        // {[ ...props.number ].map((digit, index) => (
        <span className={`${content.styles[parseInt(digit)]}`} key={index}>
          {digit}
        </span>
      ))}
    </span>
  );
};

export default Number;