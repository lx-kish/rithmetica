import React, { ReactElement } from "react";

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
        <span className={props.label.span.left.className}>
          {props.label.span.left.text}
        </span>
        <input
          {...props.input}
          checked={props.checked}
          onChange={props.onChange}
        />
        <span className={props.label.span.right.className}>
          {props.label.span.right.text}
        </span>
      </label>
    </div>
  );
}

export default Toggler;
