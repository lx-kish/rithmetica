import { ReactElement } from "react";

import Input from "../elements/input.component";
import StyledSpan from "../elements/styled-span.component";

interface IProps {
  checked: boolean;
  onChange: () => void;
  toggleBox: {
    className: string;
  };
  label: {
    htmlFor: string;
    span: {
      left: {
        className: string;
        text: string;
      };
      right: {
        className: string;
        text: string;
      };
    };
  };
  input: {};
}

function Toggler(props: IProps): ReactElement<any, any> {
  return (
    <div className={props.toggleBox.className}>
      <label htmlFor={props.label.htmlFor}>
        <StyledSpan className={props.label.span.left.className}>
          {props.label.span.left.text}
        </StyledSpan>
        <Input
          {...props.input}
          checked={props.checked}
          onChange={props.onChange}
        />
        <StyledSpan className={props.label.span.right.className}>
          {props.label.span.right.text}
        </StyledSpan>
      </label>
    </div>
  );
}

export default Toggler;
