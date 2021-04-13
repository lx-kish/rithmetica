import React from 'react';

import Problem from '../problem/problem.component';

// const areEqual = (prevProps, nextProps) => true;

// const Problems = React.memo((props) => {
const Problems = (props) => {
	/**
   * The following algorithm explained in details at:
   * https://stackoverflow.com/questions/42391499/react-render-new-row-every-4th-column
   */

	/**
   * array of @cols elements, where @cols is the number of rows needed
   * @arr <Array> - the given array of rendering elements
   * @cols <Number> - the number of columns in a row
   */
	const rows = (arr, cols) => [ ...Array(Math.ceil(arr.length / cols)) ];

	// chunk the products into the array of rows
	const contentRows = (arr, cols) => rows(arr, cols).map((row, idx) => arr.slice(idx * cols, idx * cols + cols));

	const getContent = contentRows(props.problems, props.columns).map((row, i) => (
		// const getContent = contentRows(props.problems.additions, colPerRow).map((row, i) => (
		<div key={i} className="problem__row">
			{row.map((problem, j) => <Problem key={j} content={problem} x={problem.x} y={problem.y} sign={`+`} />)}
		</div>
	));

	return <div className="problems">{getContent}</div>;
	// }, areEqual);
};

export default Problems;
