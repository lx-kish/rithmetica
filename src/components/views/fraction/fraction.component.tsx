import React, { ReactElement } from "react";

import Number from "../number/number.component";
import { IProblem } from "../../../TS/interfaces/interfaces";

interface IProps {
  className: string;
  fraction: IProblem;
}

function Fraction({ className, fraction }: IProps): ReactElement {
  return (
    <span className={className} data-testid="fraction-span">
      <Number
        number={fraction.numerator?.toString() || ""}
        className="problem__digit"
      />
      <span className="fraction__delimeter"></span>
      <Number
        number={fraction.denominator?.toString() || ""}
        className="problem__digit"
      />
    </span>
  );
}

export default Fraction;
