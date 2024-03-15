import React, { ReactElement } from "react";

import Collapsible from "../../../collapsible/collapsible.component";
import Settings from "../../../settings/fractions/settings.component";
import Math from "../../../descriptions/fractions/math.component";
import HowAdditionSubtractionWorks from "../../../descriptions/fractions/how-fractions-work.component";

export default function FractionsHeaderContent(): ReactElement {
  return (
    <>
      <Collapsible
        title="About"
        id="about"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-one"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-one"
        iconClassName="collapsible__icon--level-one"
        borderBottom={false}
      >
        <p className="description__paragraph description__paragraph--level-one">
          The application is dedicated to developing and enhance skills of
          operations on fractions, which achieves via solving problems with
          different levels of complexity.
          <br />
        </p>
        <Collapsible
          title="Math Theory"
          id="math"
          collapsibleClassName="collapsible"
          titleClassName="collapsible__title collapsible__title--level-two"
          iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-two"
          iconClassName="collapsible__icon--level-two"
          borderBottom={false}
        >
          <Math paragraphClassName="description__paragraph description__paragraph--level-two" />
        </Collapsible>
        <Collapsible
          title="How it works"
          id="how-it-works"
          collapsibleClassName="collapsible"
          titleClassName="collapsible__title collapsible__title--level-two"
          iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-two"
          iconClassName="collapsible__icon--level-two"
          borderBottom={false}
        >
          <HowAdditionSubtractionWorks paragraphClassName="description__paragraph description__paragraph--level-two" />
        </Collapsible>
      </Collapsible>
      <Settings />
    </>
  );
}
