import React from 'react';

import { useAppSelector } from '../../../../redux/hooks';
import {
    subtract,
} from '../../../../redux/multiplicationTable/multiplicationTabSlice';

import content from '../../../../table.content';

import TabCell from '../tab-cell/tab-cell.component';
import TabEmptyCell from '../tab-empty-cell/tab-empty-cell.component';

interface IProps {
    className: string;
    subtract: boolean;
    sign: string;
    value: number;
};

const TabLine: React.FC<IProps> = props => {

    const subtractState = useAppSelector(subtract);

    /**
     * Returns mathematical sign for addition or subtraction
     * @return {html entity} sign code
     */
    const getSign = (): any => {
        return subtractState ? <>&#x2212;</> : <>&#x2b;</>
    }

    return (
        <div className={`tab__line ${props.className}`}>
            <div className={`tab__heading-cell tab__heading-cell--side ${content.styles[props.value]}`}>{props.value}</div>
            {[...Array(11)].map((x, i) => {
                let j = subtractState ? 10 - i : i
                if (j > 1) {
                    return (
                        <React.Fragment key={j}>
                            <TabEmptyCell
                                className='tab__empty-cell'
                                sign={i >= 1 ? getSign() : ''}
                            />
                            <TabCell
                                line={props.value}
                                col={j}
                                value={j * props.value}
                            />
                        </React.Fragment>
                    )
                }
                else return null;
            }
            )}
            <div className={`tab__heading-cell tab__heading-cell--side ${content.styles[props.value]}`}>{props.value}</div>
        </div>
    )
};

export default TabLine;