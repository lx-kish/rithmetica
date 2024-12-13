import { ReactElement } from "react";

import Input from "../elements/input.component";
import StyledSpan from "../elements/styled-span.component";

interface IProps {
  checked: boolean;
  onChange: () => void;
  toggleBox?: {
    [key: string]: string | undefined;
  };
  togglerLeft?: {
    [key: string]: string | undefined;
  };
  togglerRight?: {
    [key: string]: string | undefined;
  };
  input?: {
    [key: string]: string | undefined;
  };
}

function Toggler({
  checked,
  onChange,
  toggleBox,
  togglerLeft,
  togglerRight,
  input,
}: IProps): ReactElement<any, any> {
  return (
    <div className={toggleBox?.className}>
      <label htmlFor={input?.id}>
        <StyledSpan className={togglerLeft?.className}>
          {togglerLeft?.text}
        </StyledSpan>
        <Input {...input} checked={checked} onChange={onChange} />
        <StyledSpan className={togglerRight?.className}>
          {togglerRight?.text}
        </StyledSpan>
      </label>
    </div>
  );
}

export default Toggler;
