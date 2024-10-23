import { ReactElement } from "react";

import { IBtnProps } from "../../../TS/interfaces/interfaces";

function Btn({ children, type = "button", ...props }: IBtnProps): ReactElement {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}

export default Btn;
