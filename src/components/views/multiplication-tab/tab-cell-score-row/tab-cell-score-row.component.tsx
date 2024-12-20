import { ReactElement } from "react";

import IconCircle from "../../../icons-svg/icon-circle.component";

import content from "../../../../table.content";

interface IProps {
  dotsAmount: number;
  dotsExcluded?: number;
}

function TabCellScoreRow({
  dotsAmount,
  dotsExcluded = 0,
}: IProps): ReactElement {
  return (
    <div className="component__score-row">
      {dotsAmount > 0 &&
        [...Array(dotsAmount)].map((x, i) => (
          <IconCircle
            key={i + dotsExcluded}
            className={`component__icon ${
              content.styles[i + 1 + dotsExcluded]
            }`}
          />
        ))}
    </div>
  );
}

export default TabCellScoreRow;
