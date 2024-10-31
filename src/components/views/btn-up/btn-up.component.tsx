import { ReactElement } from "react";

import Btn from "../elements/btn.component";
import IconChevronUp from "../../icons-svg/icon-chevron-up.component";

function BtnUp(): ReactElement {
  function onClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <Btn className="btn-up" onClick={onClick}>
      <IconChevronUp className="btn-up__icon" />
    </Btn>
  );
}

export default BtnUp;
