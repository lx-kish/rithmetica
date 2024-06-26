import React, { ReactElement } from "react";

import handleKeyDown from "../../../utils/handle-key-down-event/handle-key-down-event";
import { useInputScrollRefCallback } from "../../../hooks/use-input-scroll-ref-callback/use-input-scroll-ref-callback";

interface IProps {
  name?: string;
  className?: string;
  pattern?: string;
  step?: string;
  result?: string;
  value?: string;
  disabled?: boolean;
  title?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  name,
  className,
  pattern,
  step,
  result,
  value,
  disabled = false,
  title = "",
  handleChange,
}: IProps): ReactElement {
  const ref = useInputScrollRefCallback();

  const processKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown(e);
  };

  return (
    <input
      type="number"
      pattern={pattern}
      inputMode="numeric"
      className={className}
      step={step}
      placeholder=" "
      title={title} // removing tooltip displaying right answer on mouse hover input field when wrong number entered (html validation)
      name={name}
      min={result}
      max={result}
      value={value}
      disabled={disabled}
      onKeyDown={processKeyDown}
      onChange={handleChange}
      ref={ref}
      autoComplete="off" // for dropping the value when cached by browser
    />
  );
}

export default Input;
