import { ReactElement } from "react";

interface IProps {
  className: string;
  sign: string | number | React.ReactNode;
}

function Sign({ className, sign }: IProps): ReactElement {
  return <span className={className}>{sign}</span>;
}

export default Sign;
