import React from 'react';

import { useAppSelector } from '../../../redux/hooks';
import {
	selectAdditionSubtraction,
} from '../../../redux/addition-subtraction/additionSubtractionSlice';

import Problem from '../problem/problem.component';

import IProblem from '../../../TS/interfaces/IProblem';

interface IProps {

};

const Problems: React.FC<IProps> = (props) => {

	const additionSubtractionState = useAppSelector(selectAdditionSubtraction);

	/**
	 * The following algorithm explained in details at:
	 * https://stackoverflow.com/questions/42391499/react-render-new-row-every-4th-column
	 */

	/**
	 * array of @cols elements, where @cols is the number of rows needed
	 * @arr <Array> - the given array of rendering elements
	 * @cols <Number> - the number of columns in a row
	 */
	const rows = (arr: IProblem[][], cols: number) => [...Array(Math.ceil(arr.length / cols))];

	// chunk the problems into the array of rows
	const contentRows = (arr: IProblem[][], cols: number) => rows(arr, cols).map((row, idx: number) => arr.slice(idx * cols, idx * cols + cols));

	const getContent = contentRows(additionSubtractionState.problems, additionSubtractionState.columns).map((row, i) => (

		<div key={i} className="problem__row">
			{row.map((problem, j) => <Problem key={j} content={problem} />)}
		</div>
	));

	return <div className="problems">{getContent}</div>;
};

export default Problems;
