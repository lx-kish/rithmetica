import { ReactElement } from "react";

import Collapsible from "../../collapsible/collapsible.component";

import UpToTen from "./problem-types/up-to-ten.component";
import SingleDigitOperands from "./problem-types/single-digit-operands.component";
import TwoAndSingleDigits from "./problem-types/two-and-single-digits.component";
import TwoDigitsAndTens from "./problem-types/two-digit-and-tens.component";
import TwoDigitsOperands from "./problem-types/two-digit-operands.component";
import TwoDigitsTidingUp from "./problem-types/two-digit-tidying-up.component";
import TensWithinThousand from "./problem-types/tens-within-thousand.component";
import HundredsWithinThousand from "./problem-types/hundreds-within-thousand.component";

import schemaSmallScreen from "./schema-arrows--small.png";
import schemaBigScreen from "./shcema-arrows--big.png";

import { ICollapsibleProps } from "../../../TS/interfaces/interfaces";

function HowAdditionSubtractionWorks({
  paragraphClassName,
}: ICollapsibleProps): ReactElement {
  return (
    <>
      <p className={paragraphClassName}>
        The application consists of the Settings part and the Problems part.
        <br />
        The Problems part contains randomly generated problems, having specific
        problems characteristics, which can be preassigned in settings part
        before generating.
        <br />
        <br />
        Each problem contains two numeric operands, addition or subtraction
        sign, equality sign and a numeric result. Depends on the specific
        setting, one of the numeric operands or the result is missing number,
        means it's an empty input field where the right answer should be input.
        If the answer is right it colors <b>white</b>, if it is wrong it colors{" "}
        <span className="three">
          <b>red</b>
        </span>
        .
      </p>
      <picture>
        <source
          srcSet={`${schemaSmallScreen} 1.8x`}
          media="(max-width: 380px)"
        />
        <source
          srcSet={`${schemaSmallScreen} 1.5x`}
          media="(max-width: 480px)"
        />
        <source
          srcSet={`${schemaSmallScreen} 1.2x`}
          media="(max-width: 580px)"
        />
        <source srcSet={`${schemaSmallScreen} 1x`} media="(max-width: 680px)" />
        <source srcSet={`${schemaBigScreen} 1.5x`} media="(max-width: 940px)" />
        <img
          className="description__image"
          srcSet={`${schemaBigScreen} 1x`}
          alt="Full Logo"
        />
      </picture>
      <p className="description__paragraph description__paragraph--level-two">
        The Settings part contains one or multiple settings selections, which
        assign the specific details for the problems generating. Each setting
        selection provides option to set operation (addition or subtraction),
        missing operand (first operand, second one, result or random -
        alltogether in arbitrary sequence), possible problem type (described
        further), and quantity of problems needed to be generated. If one of the
        selections is not selected, or the quantity field remains empty or equal
        0, the line of settings just skipping during problems generating.
        <br />
        <br />
        There are several problem types for addition or subtraction in the
        application:
        <br />
      </p>
      <Collapsible
        title="Up To Ten"
        id="up-to-ten"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <UpToTen paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible
        title="Single Digit Operands"
        id="single-digit-operands"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <SingleDigitOperands paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible
        title="Two and Single Digits"
        id="two-and-single-digits"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <TwoAndSingleDigits paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible
        title="Two Digits and Tens"
        id="two-digits-and-tens"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <TwoDigitsAndTens paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible
        title="Two Digits Operands"
        id="two-digits-operands"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <TwoDigitsOperands paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible
        title="Two Digits Tiding Up"
        id="two-digits-tiding-up"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <TwoDigitsTidingUp paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible
        title="Tens Within Thousand"
        id="tens-within-thousand"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <TensWithinThousand paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible
        title="Hundreds Within Thousand"
        id="hundreds-within-thousand"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <HundredsWithinThousand paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
    </>
  );
}

export default HowAdditionSubtractionWorks;
