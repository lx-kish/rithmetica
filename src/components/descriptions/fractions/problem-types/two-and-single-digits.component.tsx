import { ReactElement } from "react";

import { ICollapsibleProps } from "../../../../TS/interfaces/interfaces";

function TwoAndSingleDigits({
  paragraphClassName,
}: ICollapsibleProps): ReactElement {
  return (
    <p className={paragraphClassName}>
      A two-digit and a single digit is a type of problems, where single digit
      number is added to or subtracted from a two-digit number. Besides the
      addition numbers, this type of problems developes the skill of keeping in
      mind resulted tens and includ them into calculations.
      <br />
      <span className="description__paragraph--level-one">27 + 5</span>
      <br />
      <br />
      Possible solution strategies are:
      <br />
      Counting on
      <br />
      Make a ten
      <br />
      Decomposing
      <br />
    </p>
  );
}

export default TwoAndSingleDigits;
