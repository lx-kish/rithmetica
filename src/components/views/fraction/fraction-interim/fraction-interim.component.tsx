import { ChangeEvent, ReactElement } from "react";

import InputNumeric from "../../input-numeric/input-numeric.component";
import Sign from "../../sign/sign.component";
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
}

function FractionInterim({
  content,
  operand,
  getInputClassName,
  handleChange,
}: IProps): ReactElement {
  return (
    <StyledSpan className="fraction">
      <StyledSpan className="fraction__interim">
        <InputNumeric
          pattern="[0-9]*"
          className={getInputClassName(operand.numerator1, "interimNumerator1")}
          step="1"
          name="interimNumerator1"
          result={operand.numerator1?.toString()}
          value={content[content.length - 1].interimNumerator1?.toString()}
          handleChange={handleChange}
        />
        <Sign className="fraction__sign fraction__sign--interim">
          {operand.sign === "×" || operand.sign === "÷" ? "×" : operand.sign}
        </Sign>
        <InputNumeric
          pattern="[0-9]*"
          className={getInputClassName(operand.numerator2, "interimNumerator2")}
          step="1"
          name="interimNumerator2"
          result={operand.numerator2?.toString()}
          value={content[content.length - 1].interimNumerator2?.toString()}
          handleChange={handleChange}
        />
      </StyledSpan>
      <FractionDelimeter className="fraction__delimeter" />
      <StyledSpan className="fraction__interim">
        <InputNumeric
          pattern="[0-9]*"
          className={getInputClassName(
            operand.denominator1,
            "interimDenominator1"
          )}
          step="1"
          name="interimDenominator1"
          result={operand.denominator1?.toString()}
          value={content[content.length - 1].interimDenominator1?.toString()}
          handleChange={handleChange}
        />
        {operand.sign === "×" || operand.sign === "÷" ? (
          <>
            <Sign className="fraction__sign fraction__sign--interim">×</Sign>
            <InputNumeric
              pattern="[0-9]*"
              className={getInputClassName(
                operand.denominator2,
                "interimDenominator2"
              )}
              step="1"
              name="interimDenominator2"
              result={operand.denominator2?.toString()}
              value={content[
                content.length - 1
              ].interimDenominator2?.toString()}
              handleChange={handleChange}
            />
          </>
        ) : null}
      </StyledSpan>
    </StyledSpan>
  );
}

export default FractionInterim;
