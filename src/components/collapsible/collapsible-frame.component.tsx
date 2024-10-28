import { ReactElement, ReactNode } from "react";

import IconChevronDown from "../icons-svg/icon-chevron-down.component";

import Btn from "../views/btn/btn.component";

interface IProps {
  lmntClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  title?: string;
  btnBoxClassName?: string;
  btnClassName?: string;
  iconClassName?: string;
  collapsedClassName?: string;
  handleClick?: () => void;
  children?: ReactNode;
}

function CollapsibleFrame({
  lmntClassName = "",
  headerClassName = "",
  titleClassName = "",
  title = "",
  btnBoxClassName = "",
  btnClassName = "",
  iconClassName = "",
  collapsedClassName = "",
  handleClick = () => {},
  children = "",
}: IProps): ReactElement {
  return (
    <div className={lmntClassName}>
      <div className={headerClassName}>
        <h3 className={titleClassName}>{title}</h3>
        <div className={btnBoxClassName}>
          <Btn className={btnClassName} onClick={handleClick}>
            <IconChevronDown className={iconClassName} />
          </Btn>
        </div>
      </div>
      <div className={collapsedClassName}>{children}</div>
    </div>
  );
}

export default CollapsibleFrame;
