import { ReactElement } from "react";
import { ISpanProps } from "../../../TS/interfaces/interfaces";

function StyledSpan({ children, ...props }: ISpanProps): ReactElement {
  return <span {...props}>{children}</span>;
}

export default StyledSpan;
