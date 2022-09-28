import React from 'react';

import { useAppSelector } from '../../../../redux/hooks';
import {
    subtract,
} from '../../../../redux/multiplicationTable/multiplicationTabSlice';

import content from '../../../../table.content';

import TabHeader from '../tab-header/tab-header.component';
import TabEmptyLine from '../tab-empty-line/tab-empty-line.component';
import TabLine from '../tab-line/tab-line.component';

interface IProps {};

const Tab: React.FC<IProps> = props => {
   
    const subtractState = useAppSelector(subtract);

    /**
     * Returns mathematical sign for addition or subtraction
     * @return {html entity} sign code
     */
     const getSign = (): any => {
        return subtractState ? <>&#x2212;</> : <>&#x2b;</>
    }
    
    return (
        <section className="tab" id="tab">
            <TabHeader
                id={"header-stick"}
            />
            <TabEmptyLine />
            {[...Array(11)].map((x, i) =>
                i > 1 ?
                    <TabLine
                        key={i}
                        className={content.styles[i]}
                        value={i}
                        subtract={subtractState}
                        sign={getSign()}
                    />
                    : null
            )}
            <TabHeader
                id={""}
            />
        </section>
    )
};

export default Tab;