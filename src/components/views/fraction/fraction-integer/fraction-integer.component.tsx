import { ChangeEvent, ReactElement } from "react";

import InputNumeric from "../../input-numeric/input-numeric.component";
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

function FractionInteger({
  content,
  operand,
  getInputClassName,
  handleChange,
  isDisabled,
}: IProps): ReactElement {
  return (
    <StyledSpan className="fraction__input-box">
      <InputNumeric
        pattern="[0-9]*"
        step="1"
        className={getInputClassName(operand.integer, operand.type)}
        name={operand.type}
        result={operand.integer?.toString()}
        disabled={isDisabled(operand.type)}
        value={content[content.length - 1][operand.type]?.toString()}
        handleChange={handleChange}
      />
    </StyledSpan>
  );
}

export default FractionInteger;
