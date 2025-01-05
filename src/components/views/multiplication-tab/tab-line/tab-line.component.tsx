import { Fragment, ReactElement } from "react";

import { useAppSelector } from "../../../../redux/hooks";
import { subtract } from "../../../../redux/multiplicationTable/multiplicationTabSlice";

import content from "../../../../table.content";

import TabCell from "../tab-cell/tab-cell.component";
import TabEmptyCell from "../tab-empty-cell/tab-empty-cell.component";
import Sign from "../../sign/sign.component";

interface IProps {
  className: string;
  subtract?: boolean;
  sign?: string;
  value: number;
}

function TabLine({ className, value }: IProps) {
  const subtractState = useAppSelector(subtract);

  /**
   * Returns mathematical sign for addition or subtraction
   * @return {ReactElement} sign code
   */
  function getSign(): ReactElement {
    return subtractState ? <>&#x2212;</> : <>&#x2b;</>;
  }

  return (
    <div className={`tab__line ${className}`}>
      <div
        className={`tab__heading-cell tab__heading-cell--side ${content.styles[value]}`}
      >
        {value}
      </div>
      {[...Array(11)].map((x, i) => {
        let j = subtractState ? 10 - i : i;
        return (
          j > 1 && (
            <Fragment key={j}>
              <TabEmptyCell className="tab__empty-cell">
                <Sign>{i >= 1 ? getSign() : ""}</Sign>
              </TabEmptyCell>
              <TabCell line={value} col={j} value={j * value} />
            </Fragment>
          )
        );
      })}
      <div
        className={`tab__heading-cell tab__heading-cell--side ${content.styles[value]}`}
      >
        {value}
      </div>
    </div>
  );
}

export default TabLine;
