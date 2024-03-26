import React, { ReactElement } from "react";

import Fraction from "../../fraction/fraction.component";

import Sign from "../../sign/sign.component";
import FractionInterim from "../../fraction-results/fraction-interim.component";
import FractionInput from "../../fraction-results/fraction-input.component";
import FractionInteger from "../../fraction-results/fraction-integer.component";

import { IProblem } from "../../../../TS/interfaces/interfaces";
import { fractionOperandTypes } from "../../../../TS/constatnts/constants";

interface IProps {
  stateProblemIndex: number;
  content: IProblem[];
}

function Problem({ stateProblemIndex, content }: IProps): ReactElement {
  function renderElements(operand: any, i: number): ReactElement | undefined {
    switch (operand.type) {
      case fractionOperandTypes.fraction:
        return (
          <Fraction
            fraction={operand}
            className="fraction"
            key={`problem__fraction-${i}`}
          />
        );

      case fractionOperandTypes.sign:
        return (
          <Sign
            sign={operand.value}
            className="fraction__sign"
            key={`problem__sign-${operand.value}-${i}`}
          />
        );

      case fractionOperandTypes.interim:
        return (
          <FractionInterim
            stateProblemIndex={stateProblemIndex}
            fraction={operand}
            className="fraction"
            key={`problem__fraction-${i}`}
          />
        );

      case fractionOperandTypes.resultInteger:
      case fractionOperandTypes.remainedInteger:
      case fractionOperandTypes.simplifiedInteger:
        return (
          <FractionInteger
            stateProblemIndex={stateProblemIndex}
            fraction={operand}
            type={operand.type}
            className="fraction"
            key={`problem__integer-${operand.type}-${i}`}
          />
        );
      case fractionOperandTypes.result:
      case fractionOperandTypes.remained:
      case fractionOperandTypes.simplified:
        return (
          <FractionInput
            stateProblemIndex={stateProblemIndex}
            fraction={operand}
            type={operand.type}
            className="fraction"
            key={`problem__fraction-${operand.type}-${i}`}
          />
        );

      default:
        break;
    }
    return undefined;
  }
  return (
    <div className="problem problem--fraction">
      {content.map((operand: Record<string, any>, i) =>
        renderElements(operand, i)
      )}
    </div>
  );
}

export default Problem;
