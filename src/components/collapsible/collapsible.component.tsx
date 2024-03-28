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
  useStickHeader?: boolean;
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
  useStickHeader = false,
  children,
}: IProps): ReactElement {
  const { setDisplayTabHeader } = useStickHeaderOnScroll();
  const [display, setDisplay] = useState(false);

  /**
   * React hook useEffect for sending up the state in case it is needed
   */
  useEffect(() => {
    if (useStickHeader) setDisplayTabHeader(display);
  }, [display, useStickHeader, setDisplayTabHeader]);

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
          type="checkbox"
          className="collapsible__btn"
          id={id}
          checked={display}
          onChange={handleChange}
          autoComplete="off" //for dropping the value when cached by browser
        />
        <label htmlFor={id} className={iconBoxClassName}>
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
