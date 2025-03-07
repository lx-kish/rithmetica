import { ReactElement } from "react";

import Collapsible from "../../views/collapsible/collapsible.component";

import CountingOn from "../math-theory/strategies/counting-on.component";
import MakeATen from "../math-theory/strategies/make-a-ten.component";
import Decomposing from "../math-theory/strategies/decomposing.component";
import EqualAddition from "../math-theory/strategies/equal-addition.component";
import Compensation from "../math-theory/strategies/compensation.component";

import { ICollapsibleProps } from "../../../TS/interfaces/interfaces";

function Math({ paragraphClassName }: ICollapsibleProps): ReactElement {
  return (
    <>
      <p className={paragraphClassName}>This section is not emplemented yet.</p>
      {/* <Collapsible
				title="Counting On"
				id="counting-on"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<CountingOn
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/>
			<Collapsible
				title="Make A Ten"
				id="make-a-ten"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<MakeATen
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/>
			<Collapsible
				title="Decomposing"
				id="decomposing"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<Decomposing
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/>
			<Collapsible
				title="Equal Addition"
				id="equal-addition"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<EqualAddition
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/>
			<Collapsible
				title="Compensation"
				id="compensation"
				collapsibleClassName="collapsible"
				titleClassName="collapsible__title--level-three"
				iconClassName="collapsible__icon--level-three"
				content={
					<Compensation
						paragraphClassName="description__paragraph description__paragraph--level-two"
					/>
				}
				borderBottom={false}
			/> */}
    </>
  );
}

export default Math;
