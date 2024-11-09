import { ChangeEvent, ReactElement } from "react";

import Input from "../../input/input.component";
import FractionDelimeter from "../fraction-delimeter/fraction-delimeter.component";
import StyledSpan from "../../elements/styled-span.component";

import { IProblem } from "../../../../TS/interfaces/interfaces";

interface IProps {
  content: IProblem[];
  operand: Record<string, any>;
  getInputClassName: (
    value: string | number,
    answerAtr: string | number
  ) => string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: (field: string) => boolean;
}

function FractionInput({
  content,
  operand,
  getInputClassName,
  handleChange,
  isDisabled,
}: IProps): ReactElement {
  const numeratorName = `${operand.type}Numerator`;
  const denominatorName = `${operand.type}Denominator`;

  return (
    <StyledSpan className="fraction">
      <Input
        pattern="[0-9]*"
        className={getInputClassName(operand.numerator, numeratorName)}
        step="1"
        name={numeratorName}
        result={operand.numerator?.toString()}
        disabled={isDisabled(operand.type)}
        value={content[content.length - 1][numeratorName]?.toString()}
        handleChange={handleChange}
      />
      <FractionDelimeter className="fraction__delimeter" />
      <Input
        pattern="[0-9]*"
        className={getInputClassName(operand.denominator, denominatorName)}
        step="1"
        name={denominatorName}
        result={operand.denominator?.toString()}
        disabled={isDisabled(operand.type)}
        value={content[content.length - 1][denominatorName]?.toString()}
        handleChange={handleChange}
      />
    </StyledSpan>
  );
}

export default FractionInput;
