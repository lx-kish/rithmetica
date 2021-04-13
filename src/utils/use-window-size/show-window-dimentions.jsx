import React from 'react';

import useWindowSize from './use-window-size';

const ShowWindowDimensions = (props) => {
	const [ width, height ] = useWindowSize();
	return (
		<span className={props.className}>
			Window size: {width} x {height}
		</span>
	);
};

export default ShowWindowDimensions;
