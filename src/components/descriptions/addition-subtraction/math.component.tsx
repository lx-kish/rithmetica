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
      <p className={paragraphClassName}>
        There are several strategies for performing mental addition and
        subtraction:
        <br />
      </p>
      <Collapsible title="Counting On" level="three">
        <CountingOn paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible title="Make A Ten" level="three">
        <MakeATen paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible title="Decomposing" level="three">
        <Decomposing paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible title="Equal Addition" level="three">
        <EqualAddition paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Collapsible title="Compensation" level="three">
        <Compensation paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
    </>
  );
}

export default Math;
