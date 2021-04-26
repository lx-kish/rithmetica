import React from 'react';

interface IProps {};

const EmptyLine: React.FC<IProps> = props => {

    return (
        <div className='tab__line--empty-stick'>
            <div className='tab__heading-cell tab__heading-cell--side'>{" "}</div>
            {/* <div className='tab__heading-cell tab__heading-cell--side'>{props.sign}</div> */}
        </div>
    )
};

export default EmptyLine;