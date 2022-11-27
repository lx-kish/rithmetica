import React from "react";

import sections from "../../../../sections";
import Collapsible from "../../../collapsible/collapsible.component";
import Settings from "../../../settings/fractions/settings.component";
import Math from "../../../descriptions/fractions/math.component";
import HowAdditionSubtractionWorks from "../../../descriptions/fractions/how-fractions-work.component";

const Header: React.FC = () => {
  const sectionSettings = sections.find((el) => el.link === "/fractions");

  const collapsibleContent = () => {
    return (
      <>
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
          content={
            <Math paragraphClassName="description__paragraph description__paragraph--level-two" />
          }
          borderBottom={false}
        />
        <Collapsible
          title="How it works"
          id="how-it-works"
          collapsibleClassName="collapsible"
          titleClassName="collapsible__title collapsible__title--level-two"
          iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-two"
          iconClassName="collapsible__icon--level-two"
          content={
            <HowAdditionSubtractionWorks paragraphClassName="description__paragraph description__paragraph--level-two" />
          }
          borderBottom={false}
        />
      </>
    );
  };

  return (
    <header className="header">
      <h1 className="header__title">{sectionSettings?.name}</h1>
      <h3 className="header__title--small">{sectionSettings?.motto}</h3>
      <Collapsible
        title="About"
        id="about"
        collapsibleClassName="collapsible"
        titleClassName="collapsible__title collapsible__title--level-one"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-one"
        iconClassName="collapsible__icon--level-one"
        content={collapsibleContent()}
        borderBottom={false}
      />
      <Settings />
    </header>
  );
};

export default Header;
