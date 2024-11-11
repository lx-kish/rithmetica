import { ReactElement } from "react";

import { IInputProps } from "../../../TS/interfaces/interfaces";

function Input({ passingRef, ...props }: IInputProps): ReactElement {
  return <input ref={passingRef} {...props} />;
}

export default Input;
