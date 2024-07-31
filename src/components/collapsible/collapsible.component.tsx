import { useState, useEffect, ReactElement } from "react";

import IconChevronDown from "../icons-svg/icon-chevron-down.component";

import useStickHeaderOnScroll from "../../hooks/use-stick-header-on-scroll/use-stick-header-on-scroll";

interface IProps {
  id: string;
  borderBottom?: boolean;
  collapsibleClassName: string;
  titleClassName?: string;
  title?: string;
  iconBoxClassName?: string;
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
  iconBoxClassName = "",
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

  const handleChange = () => {
    setDisplay((currDisplay) => !currDisplay);
  };

  return (
    <div className={collapsibleClassName} key={id}>
      <div
        className={`collapsible__line${
          borderBottom ? " collapsible__border-bottom" : ""
        }`}
      >
        <h3 className={titleClassName}>{title}</h3>
        <input
          type="button"
          className="collapsible__btn"
          id={id}
          onClick={handleChange}
          autoComplete="off" //for dropping the value when cached by browser
        />
        <label
          htmlFor={id}
          className={`${iconBoxClassName}${
            display ? " collapsible__icon-box--expanded" : ""
          }`}
          data-testid="icon-box"
        >
          <IconChevronDown className={iconClassName} />
        </label>
      </div>
      <div
        className={`description ${
          display ? "collapsible--expanded" : "collapsible--collapsed"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapsible;
