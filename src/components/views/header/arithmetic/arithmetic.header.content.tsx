import React, { ReactElement } from "react";

import Collapsible from "../../../collapsible/collapsible.component";
import Math from "../../../descriptions/addition-subtraction/math.component";
import HowAdditionSubtractionWorks from "../../../descriptions/addition-subtraction/how-addition-subtraction-works.component";

import Settings from "../../settings/settings.compound.component";

import ProblemTypes from "../../../math/problem-types";

import {
  generateProblems,
  insertSetting,
  deleteSetting,
  changeSetting,
  settings,
} from "../../../../redux/arithmetic/arithmeticSlice";
import { useAppSelector } from "../../../../redux/hooks";

import { IProblemType, ISettings } from "../../../../TS/interfaces/interfaces";

interface IProps {
  pageName: string;
}

function ArithmeticHeaderContent({ pageName }: IProps): ReactElement {
  const types = ProblemTypes.filter((type) => type.page === pageName);

  function RenderRow({
    index,
    setting,
  }: {
    index: number;
    setting: ISettings;
  }) {
    function typesFilter(type: IProblemType): boolean {
      return type.operation === setting?.operation;
    }

    return (
      <Settings.Row index={index} setting={setting} typesFilter={typesFilter}>
        <Settings.Container className="settings__col settings__col--controls">
          <Settings.Operations />
          <Settings.Missing />
          <Settings.Types />
        </Settings.Container>
        <Settings.Container className="settings__col settings__col--qty-btns">
          <Settings.Quantity />
          <Settings.ControlBtns />
        </Settings.Container>
      </Settings.Row>
    );
  }

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
          The application is dedicated to developing mental addition,
          subtraction, multiplication and division skills, which achieves via
          solving problems with different levels of complexity.
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
      <Settings
        types={types}
        generateProblems={generateProblems}
        insertSetting={insertSetting}
        deleteSetting={deleteSetting}
        changeSetting={changeSetting}
        settingsState={settings}
      >
        <Settings.Body>
          <Settings.Group
            data={useAppSelector(settings)}
            render={(setting: ISettings, index: number) => (
              <RenderRow key={index} index={index} setting={setting} />
            )}
          />
        </Settings.Body>
      </Settings>
    </>
  );
}

export default ArithmeticHeaderContent;
