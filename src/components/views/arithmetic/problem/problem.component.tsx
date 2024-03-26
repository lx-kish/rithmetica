import { ReactElement } from "react";

import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  setInputValue,
  problems,
} from "../../../../redux/arithmetic/arithmeticSlice";

import Number from "../../number/number.component";
import Sign from "../../sign/sign.component";

import handleKeyDown from "../../../../utils/handle-key-down-event/handle-key-down-event";

import { useInputScrollRefCallback } from "../../../../hooks/use-input-scroll-ref-callback/use-input-scroll-ref-callback";

import { IProblem } from "../../../../TS/interfaces/interfaces";
import { arithmeticOperandTypes } from "../../../../TS/constatnts/constants";

interface IProps {
  stateProblemIndex: number;
  content: IProblem[];
}

function Problem({ stateProblemIndex, content }: IProps): ReactElement {
  const stateProblems = useAppSelector(problems);

  const dispatch = useAppDispatch();

  const processKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setInputValue({
        index: stateProblemIndex,
        value: e.currentTarget.value,
      })
    );
  };

  const ref = useInputScrollRefCallback();

  return (
    <div className="problem">
      {content.map((operand: IProblem, i) => {
        let Element: ReactElement | null = null;
        switch (operand.type) {
          case arithmeticOperandTypes.operand:
            Element = (
              <Number
                number={operand.value.toString()}
                className="problem__digit"
                key={`problem__digit-${i}`}
              />
            );
            break;
          case arithmeticOperandTypes.sign:
            Element = (
              <Sign
                sign={operand.value}
                className="problem__sign"
                key={`problem__sign-${i}`}
              />
            );
            break;
          case arithmeticOperandTypes.input:
            Element = (
              <input
                key={`problem__input-${i}`}
                type="number"
                pattern="[0-9]*"
                inputMode="numeric"
                className="problem__input"
                step="1"
                title=""
                placeholder=" "
                min={operand.value}
                max={operand.value}
                value={
                  stateProblems[stateProblemIndex][
                    stateProblems[stateProblemIndex].length - 1
                  ].value
                }
                onKeyDown={processKeyDown}
                onChange={handleChange}
                ref={ref}
                autoComplete="off" //for dropping the value when cached by browser
              />
            );
            break;

          default:
            break;
        }
        return Element;
      })}
    </div>
  );
}

export default Problem;
