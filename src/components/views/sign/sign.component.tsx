import React from 'react';

interface IProps {
	className: string;
	sign: string | number | React.ReactNode;
};

const Sign: React.FC<IProps> = (props) => {
	return <span className={props.className}>{props.sign}</span>;
};

export default Sign;
