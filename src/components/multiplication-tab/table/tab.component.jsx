import React from 'react';

import content from '../../../table.content';

import TabHeader from '../tab-header/tab-header.component';
import TabEmptyLine from '../tab-empty-line/tab-empty-line.component';
import TabLine from '../tab-line/tab-line.component';
// import TabCell from '../tab-cell/tab-cell.component';


const Tab = props => {

    return (
        <main className='main'>
            <section className='tab'>
                <TabHeader
                    subtract={props.subtract}
                    sign={props.sign}
                    id={'header-stick'}
                />
                <TabEmptyLine sign={props.sign} />
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
                {/* <TabCell number={5} /> */}
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