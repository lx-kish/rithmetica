import React from 'react';

import content from '../../../table.content';

import TabHeader from '../tab-header/tab-header.component';
import TabEmptyLine from '../tab-empty-line/tab-empty-line.component';
import TabLine from '../tab-line/tab-line.component';

interface IProps {
    subtract: boolean;
    sign: Element;
};

const Tab: React.FC<IProps> = props => {

    return (
        <main className='main'>
            <section className='tab' id='tab'>
                <TabHeader
                    subtract={props.subtract}
                    sign={props.sign}
                    id={'header-stick'}
                />
                <TabEmptyLine />
                {[...Array(11)].map((x, i) =>
                    i > 1 ?
                        <TabLine
                            key={i}
                            className={content.styles[i]}
                            value={i}
                            subtract={props.subtract}
                            sign={props.sign}
                        />
                        : null
                )}
                <TabHeader
                    subtract={props.subtract}
                    sign={props.sign}
                    id={''}
                />
            </section>
        </main>
    )
};

export default Tab;