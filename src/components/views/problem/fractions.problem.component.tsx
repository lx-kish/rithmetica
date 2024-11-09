import { ReactElement } from "react";

import Fraction from "../fraction/fraction.component";

import Sign from "../sign/sign.component";
import FractionInterim from "../fraction/fraction-interim/fraction-interim.component";
import FractionLogic from "../fraction/fraction-logic/fraction-logic.component";
import FractionInteger from "../fraction/fraction-integer/fraction-integer.component";
import FractionInput from "../fraction/fraction-input/fraction-input.component";

import { IProblem } from "../../../TS/interfaces/interfaces";
import { fractionOperandTypes } from "../../../TS/constants/constants";

interface IProps {
  problemStateId: string;
  stateProblemIndex: number;
  content: IProblem[];
}

function FractionsProblem({
  problemStateId,
  stateProblemIndex,
  content,
}: IProps): ReactElement {
  function renderElements(
    operand: Record<string, any>,
    i: number
  ): ReactElement | null {
    switch (operand.type) {
      case fractionOperandTypes.fraction:
        return (
          <Fraction
            fraction={operand}
            className="fraction"
            key={`problem-fraction-${operand.type}-${i}`}
          />
        );

      case fractionOperandTypes.sign:
        return (
          <Sign
            className="fraction__sign"
            key={`problem-sign-${operand.type}-${i}`}
          >
            {operand.value}
          </Sign>
        );

      case fractionOperandTypes.interim:
        return (
          <FractionLogic
            problemStateId={problemStateId}
            stateProblemIndex={stateProblemIndex}
            content={content}
            key={`problem-fraction-${operand.type}-${i}`}
          >
            {({ getInputClassName, handleChange }) => (
              <FractionInterim
                content={content}
                operand={operand}
                getInputClassName={getInputClassName}
                handleChange={handleChange}
              />
            )}
          </FractionLogic>
        );

      case fractionOperandTypes.resultInteger:
      case fractionOperandTypes.remainedInteger:
      case fractionOperandTypes.simplifiedInteger:
        return (
          <FractionLogic
            problemStateId={problemStateId}
            stateProblemIndex={stateProblemIndex}
            content={content}
            key={`problem-integer-${operand.type}-${i}`}
          >
            {({ getInputClassName, handleChange, isDisabled }) => (
              <FractionInteger
                content={content}
                operand={operand}
                getInputClassName={getInputClassName}
                handleChange={handleChange}
                isDisabled={isDisabled}
              />
            )}
          </FractionLogic>
        );
      case fractionOperandTypes.result:
      case fractionOperandTypes.remained:
      case fractionOperandTypes.simplified:
        return (
          <FractionLogic
            problemStateId={problemStateId}
            stateProblemIndex={stateProblemIndex}
            content={content}
            key={`problem-fraction-${operand.type}-${i}`}
          >
            {({ getInputClassName, handleChange, isDisabled }) => (
              <FractionInput
                content={content}
                operand={operand}
                getInputClassName={getInputClassName}
                handleChange={handleChange}
                isDisabled={isDisabled}
              />
            )}
          </FractionLogic>
        );

      default:
        break;
    }
    return null;
  }

  return (
    <div className="problem problem--fraction">
      {content.map((operand: Record<string, any>, i) =>
        renderElements(operand, i)
      )}
    </div>
  );
}

export default FractionsProblem;
