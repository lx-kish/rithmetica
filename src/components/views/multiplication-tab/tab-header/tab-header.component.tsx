import { Fragment, ReactElement } from "react";

import { useAppSelector } from "../../../../redux/hooks";
import { subtract } from "../../../../redux/multiplicationTable/multiplicationTabSlice";

import content from "../../../../table.content";

interface IProps {
  id?: string;
}

function TabHeader({ id }: IProps) {
  const subtractState = useAppSelector(subtract);

  /**
   * Returns mathematical sign for addition or subtraction
   * @return {html entity} sign code
   */
  const getSign = (): ReactElement => {
    return subtractState ? <>&#x2212;</> : <>&#x2b;</>;
  };

  return (
    <div className="tab__line--header" id={id}>
      <div className="tab__heading-cell tab__heading-cell--side">&#xa0;</div>
      {[...Array(11)].map((x, i) => {
        let j = subtractState ? 10 - i : i;
        return (
          j > 1 && (
            <Fragment key={j}>
              <div className="tab__empty-cell tab__empty-cell--head">
                {getSign()}
              </div>
              <div className={`tab__heading-cell ${content.styles[j]}`}>
                {j}
              </div>
            </Fragment>
          )
        );
      })}
      <div className="tab__heading-cell tab__heading-cell--side">&#xa0;</div>
    </div>
  );
}

export default TabHeader;
