import { ReactElement } from "react";

import IconChevronUp from "../../icons-svg/icon-chevron-up.component";

function BtnUp(): ReactElement {
  return (
    <div
      className="btn-up"
      data-testid="btn-up" // Add data-testid attribute
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      <IconChevronUp className="btn-up__icon" />
    </div>
  );
}

export default BtnUp;
