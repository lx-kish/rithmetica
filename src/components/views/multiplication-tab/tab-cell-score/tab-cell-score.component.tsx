import { ReactElement } from "react";

import TabCellScoreRow from "../tab-cell-score-row/tab-cell-score-row.component";

interface IProps {
  tabLine: number;
}

function TabCellScore({ tabLine }: IProps): ReactElement {
  /**
   * Rounds half a number to a bigger whole digit
   * @return {Number} amount of dots on the top line
   */
  function getRoundedHalfANumber(aNumber: number): number {
    return Math.round(aNumber / 2);
  }

  /**
   * Split the amount of dots into 2 lines if amount bigger than 2
   * @return {Number} amount of dots on the top line
   */
  function getTopLineDotsAmount() {
    return tabLine > 2 ? getRoundedHalfANumber(tabLine) : tabLine;
  }

  return (
    <div className="component__score">
      <TabCellScoreRow dotsAmount={getTopLineDotsAmount()} />
      {Boolean(tabLine - getTopLineDotsAmount()) && (
        <TabCellScoreRow
          dotsAmount={tabLine - getTopLineDotsAmount()}
          dotsExcluded={getRoundedHalfANumber(tabLine)}
        />
      )}
    </div>
  );
}

export default TabCellScore;
