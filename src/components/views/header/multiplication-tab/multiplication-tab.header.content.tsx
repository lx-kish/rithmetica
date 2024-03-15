import React, { ReactElement } from "react";

import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import {
  clearAllInputs,
  switchSubtract,
  subtract,
} from "../../../../redux/multiplicationTable/multiplicationTabSlice";

import Collapsible from "../../../collapsible/collapsible.component";
import HowMultitabWorks from "../../../descriptions/multiplication-table/how-multitab-works.component";
import Toggler from "../../toggler/toggler.component";

function togglerContent() {
  return {
    togglerAddSubtract: {
      toggleBox: {
        className: "toggler__box",
      },
      label: {
        htmlFor: "addition-subtraction",
        span: {
          left: {
            className: "toggler description__paragraph--level-three",
            text: "addition",
          },
          right: {
            className: "toggler description__paragraph--level-two",
            text: "subtraction",
          },
        },
      },
      input: {
        type: "checkbox",
        className: "toggler__input",
        id: "addition-subtraction",
      },
    },
  };
}

export default function MultiplicationTabHeaderContent(): ReactElement {
  const subtractState = useAppSelector(subtract);

  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(clearAllInputs());
    dispatch(switchSubtract());
  };
  return (
    <>
      <Collapsible
        title="How it works"
        id="multitable-usage"
        collapsibleClassName="collapsible collapsible__border-bottom"
        titleClassName="collapsible__title collapsible__title--level-one"
        iconBoxClassName="collapsible__icon-box collapsible__icon-box--level-one"
        iconClassName="collapsible__icon--level-one"
        useStickHeader={true}
        borderBottom={false}
      >
        <HowMultitabWorks paragraphClassName="description__paragraph description__paragraph--level-two" />
      </Collapsible>
      <Toggler
        {...togglerContent().togglerAddSubtract}
        checked={subtractState}
        onChange={handleChange}
      />
    </>
  );
}
