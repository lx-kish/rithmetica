import React, { ReactElement } from "react";

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

function HowFractionsWorks({
  paragraphClassName,
}: ICollapsibleProps): ReactElement {
  return (
    <React.Fragment>
      <p className={paragraphClassName}>This section is not implemented yet.</p>
      {/* <picture>
				<source srcSet={`${schemaSmallScreen} 1.8x`} media="(max-width: 380px)" />
				<source srcSet={`${schemaSmallScreen} 1.5x`} media="(max-width: 480px)" />
				<source srcSet={`${schemaSmallScreen} 1.2x`} media="(max-width: 580px)" />
				<source srcSet={`${schemaSmallScreen} 1x`} media="(max-width: 680px)" />
				<source srcSet={`${schemaBigScreen} 1.5x`} media="(max-width: 940px)" />
				<img className="description__image" srcSet={`${schemaBigScreen} 1x`} alt="Full Logo" />
			</picture>
			<p className="description__paragraph description__paragraph--level-two">
				The Settings part contains one or multiple settings selections, which assign the specific details for the
				problems generating. Each setting selection provides option to set operation (addition or subtraction), missing
				operand (first operand, second one, result or random - alltogether in arbitrary sequence), possible problem type
				(described further), and quantity of problems needed to be generated. If one of the selections is not selected,
				or the quantity field remains empty or equal 0, the line of settings just skipping during problems generating.<br />
				<br />
				There are several problem types for addition or subtraction in the application:<br />
			</p> */}
      {/* <Collapsible
				title="Up To Ten"
				id="up-to-ten"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<UpToTen
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/>
			<Collapsible
				title="Single Digit Operands"
				id="single-digit-operands"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<SingleDigitOperands
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/>
			<Collapsible
				title="Two and Single Digits"
				id="two-and-single-digits"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<TwoAndSingleDigits
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/>
			<Collapsible
				title="Two Digits and Tens"
				id="two-digits-and-tens"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<TwoDigitsAndTens
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/>
			<Collapsible
				title="Two Digits Operands"
				id="two-digits-operands"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<TwoDigitsOperands
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/>
			<Collapsible
				title="Two Digits Tiding Up"
				id="two-digits-tiding-up"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<TwoDigitsTidingUp
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/>
			<Collapsible
				title="Tens Within Thousand"
				id="tens-within-thousand"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<TensWithinThousand
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/>
			<Collapsible
				title="Hundreds Within Thousand"
				id="hundreds-within-thousand"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<HundredsWithinThousand
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/> */}
    </React.Fragment>
  );
}

export default HowFractionsWorks;
