import { ReactElement } from "react";

import { ICollapsibleProps } from "../../../../TS/interfaces/interfaces";

function MakeATen({ paragraphClassName }: ICollapsibleProps): ReactElement {
  return (
    <p className={paragraphClassName}>
      Make a Ten is a mental math strategy based on developing tens from the
      given operands by adding and subtracting appropriate numbers. For example,
      to solve the addition problem
      <br />
      <span className="description__paragraph--level-one">8 + 5</span>
      <br />
      take <span className="red">2</span> from the 5 and give it to the 8<br />
      <span className="description__paragraph--level-one">
        5 - <span className="red">2</span> = 3
      </span>
      <br />
      <span className="description__paragraph--level-one">
        8 + <span className="red">2</span> = 10
      </span>
      <br />
      and then add the results
      <br />
      <span className="description__paragraph--level-one">10 + 3 = 13</span>
      <br />
      The opposite also possible: take <span className="red">5</span> from the 8
      and give it to the 5<br />
      <span className="description__paragraph--level-one">
        8 - <span className="red">5</span> = 3
      </span>
      <br />
      <span className="description__paragraph--level-one">
        5 + <span className="red">5</span> = 10
      </span>
      <br />
      <span className="description__paragraph--level-one">10 + 3 = 13</span>
      <br />
      <br />
      In subtraction, Make a Ten can be used when subtrahend ones are bigger
      then minuend
      <br />
      <span className="description__paragraph--level-one">15 - 7</span>
      <br />
      decrease both operands by 5 to make a ten in the minuend
      <br />
      <span className="description__paragraph--level-one">
        (15 - <span className="red">5</span>) - (7 -{" "}
        <span className="red">5</span>) = 10 - 2
      </span>
      <br />
      and then subtract the remined <span className="red">2</span>
      <span className="description__paragraph--level-one">10 - 2 = 8</span>
    </p>
  );
}

export default MakeATen;
