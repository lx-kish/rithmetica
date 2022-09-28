import React from "react";

import Number from "../number/number.component";
import IFractionsProblem from "../../../TS/interfaces/IFractionsProblem";

interface IProps {
  className: string;
  fraction: IFractionsProblem;
};

const Fraction: React.FC<IProps> = props => {

  return (
    <span className={props.className}>
      <Number number={props.fraction.numerator?.toString() || ""} className="problem__digit" />
      <span className="fraction__delimeter"></span>
      <Number number={props.fraction.denominator?.toString() || ""} className="problem__digit" />
    </span>
  );
};

export default Fraction;