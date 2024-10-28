import { useState, useEffect, ReactElement, ReactNode } from "react";

import useStickHeaderOnScroll from "../../hooks/use-stick-header-on-scroll/use-stick-header-on-scroll";

import CollapsibleFrame from "./collapsible-frame.component";

interface IProps {
  level?: string;
  borderBottom?: boolean;
  title?: string;
  stickyBoxId?: string;
  stickyElementId?: string;
  children?: ReactNode;
}

function CollapsibleSticky({
  level = "one",
  borderBottom = false,
  title = "",
  stickyBoxId = "",
  stickyElementId = "",
  children,
}: IProps): ReactElement {
  const [display, setDisplay] = useState(false);

  const { setDisplayTabHeader } = useStickHeaderOnScroll(
    stickyBoxId,
    stickyElementId
  );

  useEffect(() => {
    if (stickyBoxId) setDisplayTabHeader(display);
  }, [display, stickyBoxId, stickyElementId, setDisplayTabHeader]);

  const handleClick = () => {
    setDisplay((currDisplay) => !currDisplay);
  };

  return (
    <CollapsibleFrame
      lmntClassName={`collapsible${
        borderBottom ? " collapsible__border-bottom" : ""
      }`}
      headerClassName="collapsible__header"
      titleClassName={`collapsible__title collapsible__title--level-${level}`}
      title={title}
      btnBoxClassName="collapsible__btn-box"
      btnClassName={`collapsible__btn collapsible__btn--level-${level}${
        display ? " collapsible__btn--expanded" : ""
      }`}
      iconClassName={`collapsible__icon--level-${level}`}
      collapsedClassName={`collapsible--${display ? "expanded" : "collapsed"}`}
      handleClick={handleClick}
    >
      {children}
    </CollapsibleFrame>
  );
}

export default CollapsibleSticky;
