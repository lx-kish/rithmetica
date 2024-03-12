import React from "react";

import Collapsible from "../../collapsible/collapsible.component";

import CountingOn from "../math-theory/strategies/counting-on.component";
import MakeATen from "../math-theory/strategies/make-a-ten.component";
import Decomposing from "../math-theory/strategies/decomposing.component";
import EqualAddition from "../math-theory/strategies/equal-addition.component";
import Compensation from "../math-theory/strategies/compensation.component";

import ICollapsibleProps from "../../../TS/interfaces/ICollapsibleProps";

const Math: React.FC<ICollapsibleProps> = (props) => {
  return (
    <React.Fragment>
      <p className={props.paragraphClassName}>
        There are several strategies for performing mental addition and
        subtraction:
        <br />
      </p>
      <Collapsible
        title="Counting On"
        id="counting-on"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <CountingOn paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible
        title="Make A Ten"
        id="make-a-ten"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <MakeATen paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible
        title="Decomposing"
        id="decomposing"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <Decomposing paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible
        title="Equal Addition"
        id="equal-addition"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <EqualAddition paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible
        title="Compensation"
        id="compensation"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-four"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-four"
        iconClassName="collapsible__icon--level-four"
        borderBottom={false}
      >
        <Compensation paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
    </React.Fragment>
  );
};

export default Math;
