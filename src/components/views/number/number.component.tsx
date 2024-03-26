import { ReactElement } from "react";

import content from "../../../table.content";

interface IProps {
  className: string;
  number: string;
}

function Number({ className, number }: IProps): ReactElement {
  return (
    <span className={className}>
      {Array.from(number).map((digit: string, index: number) => (
        <span className={`${content.styles[parseInt(digit)]}`} key={index}>
          {digit}
        </span>
      ))}
    </span>
  );
}

export default Number;
