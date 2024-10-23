import { useState, useEffect, ReactElement } from "react";

import IconChevronDown from "../icons-svg/icon-chevron-down.component";

import useStickHeaderOnScroll from "../../hooks/use-stick-header-on-scroll/use-stick-header-on-scroll";
import Btn from "../views/btn/btn.component";

interface IProps {
  id: string;
  borderBottom?: boolean;
  collapsibleClassName: string;
  titleClassName?: string;
  title?: string;
  btnClassName?: string;
  iconClassName: string;
  stickyBoxId?: string;
  stickyElementId?: string;
  children: React.ReactNode;
}

function Collapsible({
  id,
  borderBottom = false,
  collapsibleClassName,
  titleClassName = "",
  title = "",
  btnClassName = "",
  iconClassName,
  stickyBoxId = "",
  stickyElementId = "",
  children,
}: IProps): ReactElement {
  const { setDisplayTabHeader } = useStickHeaderOnScroll(
    stickyBoxId,
    stickyElementId
  );
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (stickyBoxId) setDisplayTabHeader(display);
  }, [display, stickyBoxId, stickyElementId, setDisplayTabHeader]);

  const handleClick = () => {
    setDisplay((currDisplay) => !currDisplay);
  };

  return (
    <div className={collapsibleClassName} key={id}>
      <div
        className={`collapsible__header${
          borderBottom ? " collapsible__border-bottom" : ""
        }`}
      >
        <h3 className={`collapsible__title ${titleClassName}`}>{title}</h3>
        <div className="collapsible__btn-box">
          <Btn
            className={`collapsible__btn ${btnClassName}${
              display ? " collapsible__btn--expanded" : ""
            }`}
            id={id}
            onClick={handleClick}
          >
            <IconChevronDown className={iconClassName} />
          </Btn>
        </div>
      </div>
      <div
        className={display ? "collapsible--expanded" : "collapsible--collapsed"}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapsible;
