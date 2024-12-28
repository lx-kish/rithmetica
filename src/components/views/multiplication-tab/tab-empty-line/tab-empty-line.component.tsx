import { ReactElement } from "react";

function EmptyLine(): ReactElement {
  return (
    <div className="tab__line--empty-stick">
      <div className="tab__heading-cell tab__heading-cell--side" />
    </div>
  );
}

export default EmptyLine;
