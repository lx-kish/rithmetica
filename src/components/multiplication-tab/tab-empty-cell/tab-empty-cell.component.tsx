import React from 'react';

interface IProps {
    className: string;
    sign?: Element | any;
};

const TabEmptyCell: React.FC<IProps> = props => {

    return (
        <div className={props.className}>{props?.sign}</div>
    )
};

export default TabEmptyCell;