import { ReactElement } from "react";

import StyledSpan from "../elements/styled-span.component";

function Sign({ ...props }): ReactElement {
  return <StyledSpan {...props}>{props.children}</StyledSpan>;
}

export default Sign;
