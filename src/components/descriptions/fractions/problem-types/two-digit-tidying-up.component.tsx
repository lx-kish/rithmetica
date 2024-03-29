import { ReactElement } from "react";

import { ICollapsibleProps } from "../../../../TS/interfaces/interfaces";

function TwoDigitTidingUp({
  paragraphClassName,
}: ICollapsibleProps): ReactElement {
  return (
    <p className={paragraphClassName}>
      Two-digits tidying up is the variation of two-digits operands type of
      problems, where the ones of the one or both operands are close to ten and
      can be rounded up.
      <br />
      68 + 54
      <br />
      32 + 79
      <br />
      56 - 38
      <br />
      Despite it can be solved using any mental strategies, this type of
      problems dedicated to train rounding up strategies, such as Make a Ten,
      Equal addition, or Compensation.
    </p>
  );
}

export default TwoDigitTidingUp;
