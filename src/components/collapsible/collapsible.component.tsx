import { useState, useEffect } from "react";

import IconChevronDown from "../icons-svg/icon-chevron-down.component";

interface IProps {
  id: string;
  borderBottom?: boolean;
  collapsibleClassName: string;
  titleClassName?: string;
  title?: string;
  iconBoxClassName?: string;
  iconClassName: string;
  getDisplay?: (display: boolean) => void;
  children: React.ReactNode;
}

const Collapsible: React.FC<IProps> = ({
  id,
  borderBottom = false,
  collapsibleClassName,
  titleClassName = "",
  title = "",
  iconBoxClassName = "",
  iconClassName,
  getDisplay = undefined,
  children,
}) => {
  const [display, setDisplay] = useState(false);

  /**
   * React hook useEffect for sending up the state in case it is needed
   */
  useEffect(() => {
    if (getDisplay) getDisplay(display);
  }, [display, getDisplay]);

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
};

export default Collapsible;
