import { ReactElement } from "react";

import Collapsible from "../../collapsible/collapsible.component";
import Math from "../../../descriptions/fractions/math.component";
import HowAdditionSubtractionWorks from "../../../descriptions/fractions/how-fractions-work.component";

import Settings from "../../settings/settings.compound.component";

import ProblemTypes from "../../../math/problem-types";

import {
  generateProblems,
  insertSetting,
  deleteSetting,
  changeSetting,
  settings,
} from "../../../../redux/problems/problemsSlice";
import { useAppSelector } from "../../../../redux/hooks";

import { IProblemType, ISettings } from "../../../../TS/interfaces/interfaces";

interface IProps {
  pageName: string;
}

function FractionsHeaderContent({ pageName }: IProps): ReactElement {
  const settingsState = useAppSelector(settings);

  const types = ProblemTypes.filter((type) => type.page === pageName);

  const pageSettingsState = settingsState.filter(
    (problemType) => problemType.page === pageName
  );

  function RenderRow({ id, settings }: { id: string; settings: ISettings }) {
    function typesFilter(type: IProblemType): boolean {
      return (
        type.section === settings?.section &&
        type.operation === settings?.operation
      );
    }

    return (
      <Settings.Row id={id} settings={settings} typesFilter={typesFilter}>
        <Settings.Container className="settings__col settings__col--controls">
          <Settings.Sections />
          <Settings.Operations />
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
      <Collapsible title="About">
        <p className="description__paragraph description__paragraph--level-one">
          The application is dedicated to developing and enhance skills of
          operations on fractions, which achieves via solving problems with
          different levels of complexity.
          <br />
        </p>
        <Collapsible title="Math Theory" level="two">
          <Math paragraphClassName="description__paragraph description__paragraph--level-two" />
        </Collapsible>
        <Collapsible title="How it works" level="two">
          <HowAdditionSubtractionWorks paragraphClassName="description__paragraph description__paragraph--level-two" />
        </Collapsible>
      </Collapsible>
      <Settings
        route={pageName}
        types={types}
        generateProblems={generateProblems}
        insertSetting={insertSetting}
        deleteSetting={deleteSetting}
        changeSetting={changeSetting}
        settingsState={pageSettingsState}
      >
        <Settings.Body>
          <Settings.Group>
            {(settings: ISettings, index: number) => (
              <RenderRow
                key={settings.id}
                id={settings.id as string}
                settings={settings}
              />
            )}
          </Settings.Group>
        </Settings.Body>
      </Settings>
    </>
  );
}

export default FractionsHeaderContent;
