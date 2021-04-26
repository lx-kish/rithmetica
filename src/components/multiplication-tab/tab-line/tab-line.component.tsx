import React from 'react';

import content from '../../../table.content';

import TabCell from '../tab-cell/tab-cell.component';
import TabEmptyCell from '../tab-empty-cell/tab-empty-cell.component';

interface IProps {
    className: string;
    subtract: boolean;
    sign: Element;
    value: number;
};

const TabLine: React.FC<IProps> = props => {

    return (
        <div className={`tab__line ${props.className}`}>
            <div className={`tab__heading-cell tab__heading-cell--side ${content.styles[props.value]}`}>{props.value}</div>
            {[...Array(11)].map((x, i) => {
                let j = props.subtract ? 10 - i : i
                if (j > 1) {
                    return (
                        <React.Fragment key={j}>
                            <TabEmptyCell
                                className='tab__empty-cell'
                                sign={i >= 1 ? props.sign : ''}
                            />
                            <TabCell
                                line={props.value}
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