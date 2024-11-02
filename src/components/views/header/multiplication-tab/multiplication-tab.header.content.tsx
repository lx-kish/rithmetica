import { ReactElement } from "react";

import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import {
  clearAllInputs,
  switchSubtract,
  subtract,
} from "../../../../redux/multiplicationTable/multiplicationTabSlice";

import CollapsibleSticky from "../../collapsible/collapsible-sticky.component";
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
      <CollapsibleSticky
        title="How it works"
        level="one"
        stickyBoxId="tab"
        stickyElementId="header-stick"
        borderBottom={true}
      >
        <HowMultitabWorks paragraphClassName="description__paragraph description__paragraph--level-two" />
      </CollapsibleSticky>
      <Toggler
        {...togglerContent().togglerAddSubtract}
        checked={subtractState}
        onChange={handleChange}
      />
    </>
  );
}
