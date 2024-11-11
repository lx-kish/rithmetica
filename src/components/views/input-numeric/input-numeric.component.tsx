import { ChangeEvent, KeyboardEvent, ReactElement } from "react";

import Input from "../elements/input.component";

import handleKeyDown from "../../../utils/handle-key-down-event/handle-key-down-event";
import { useInputScrollRefCallback } from "../../../hooks/use-input-scroll-ref-callback/use-input-scroll-ref-callback";

interface IProps {
  name?: string;
  className?: string;
  pattern?: string;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  step?: string;
  result?: string;
  value?: string;
  disabled?: boolean;
  title?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputNumeric({
  name,
  className,
  pattern,
  inputMode = "numeric",
  step,
  result,
  value,
  disabled = false,
  title = "",
  handleChange,
}: IProps): ReactElement {
  const ref = useInputScrollRefCallback();

  const processKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown(e);
  };

  return (
    <Input
      type="number"
      pattern={pattern}
      inputMode={inputMode}
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
      passingRef={ref}
      autoComplete="off" // for dropping the value when cached by browser
    />
  );
}

export default InputNumeric;
