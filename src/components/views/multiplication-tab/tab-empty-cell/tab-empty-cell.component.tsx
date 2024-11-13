import { ReactElement } from "react";

import { IDivProps } from "../../../../TS/interfaces/interfaces";

function TabEmptyCell({ children, ...rest }: IDivProps): ReactElement {
  return <div {...rest}>{children}</div>;
}

export default TabEmptyCell;
