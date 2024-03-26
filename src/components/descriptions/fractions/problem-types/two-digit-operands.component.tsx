import { ReactElement } from "react";

import { ICollapsibleProps } from "../../../../TS/interfaces/interfaces";

function TwoDigitOperands({
  paragraphClassName,
}: ICollapsibleProps): ReactElement {
  return (
    <p className={paragraphClassName}>
      Two-digits operands is the most common type of problems where any
      two-digits number combined with another two-digit number without any
      limits.
      <br />
      94 + 57
      <br />
      75 - 38
      <br />
      Because of it's universality, all mental strategies can be used to solve
      problems of this type.
    </p>
  );
}

export default TwoDigitOperands;
