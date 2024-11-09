import { ReactElement } from "react";

import Number from "../number/number.component";
import FractionDelimeter from "./fraction-delimeter/fraction-delimeter.component";
import StyledSpan from "../elements/styled-span.component";

import { IProblem } from "../../../TS/interfaces/interfaces";

interface IProps {
  className: string;
  fraction: IProblem;
}

function Fraction({ className, fraction }: IProps): ReactElement {
  return (
    <StyledSpan className={className} data-testid="fraction-span">
      <Number
        number={fraction.numerator?.toString() || ""}
        className="problem__digit"
      />
      <FractionDelimeter className="fraction__delimeter" />
      <Number
        number={fraction.denominator?.toString() || ""}
        className="problem__digit"
      />
    </StyledSpan>
  );
}

export default Fraction;
