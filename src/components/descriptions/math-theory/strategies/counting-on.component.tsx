import { ReactElement } from "react";

import { ICollapsibleProps } from "../../../../TS/interfaces/interfaces";

function CountingOn({ paragraphClassName }: ICollapsibleProps): ReactElement {
  return (
    <p className={paragraphClassName}>
      Counting On is a beginning mental math strategy, using both for addition
      and for subtraction.
      <br />
      In addition, first, find the biggest number in an equation. Then count up
      until adding the lowest number. For example, in the equation
      <br />
      <span className="description__paragraph--level-one">4 + 3</span>
      <br />
      start with the 4 in the head, and then count up, "5, 6, 7." This is
      important to start count from 4, but not like, "1, 2, 3, 4...5, 6, 7." It
      also introduces the commutative property of addition, which says that
      changing the order of addends does not change the sum. So if an equation
      looks like this
      <br />
      <span className="description__paragraph--level-one">2 + 6</span>
      <br />
      it still should start with the bigger number (in this case, 6) and count
      up: "7, 8."
      <br />
      <br />
      In subtraction, simple count down from the biggest number in an equation
      until subtracting the lowest number, opposite to the counting up in
      addition. For example, in the equation
      <br />
      <span className="description__paragraph--level-one">5 - 3</span>
      <br />
      start with the 5 in the head, and then count down: "4, 3, 2."
    </p>
  );
}

export default CountingOn;
