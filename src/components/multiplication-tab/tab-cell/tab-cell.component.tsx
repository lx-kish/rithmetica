import React from 'react';

import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import {
	setInputValue,
	values,
} from '../../../redux/multiplicationTable/multiplicationTabSlice';

import handleKeyDown from '../../../utils/handle-key-down-event/handle-key-down-event';
import IconCircle from '../../icons-svg/icon-circle.component';

import content from '../../../table.content';

interface IProps {
	line: number;
	col: number;
	value: number;
	// input: string;
};

const TabCell: React.FC<IProps> = React.memo((props) => {

	const dispatch = useAppDispatch();

	const stateValues = useAppSelector(values);
	// const { line, col } = props;

	const lineIndex = props.line - 2;
	const colIndex = props.col - 2;

	/**
		 * Rounds half a number to a bigger whole digit
		 * @return {Number} amount of dots on the top line
		 */
	const getRoundedHalfANumber = (aNumber: number): number => {
		return Math.round(aNumber / 2);
	};

	/**
		 * Split the amount of dots into 2 lines if amount bigger than 2
		 * @return {Number} amount of dots on the top line
		 */
	const getTopLineDotsAmount = () => {
		return props.line > 2 ? getRoundedHalfANumber(props.line) : props.line;
	};

	/**
		 * Returns an Input className, all Inputs have the same,
		 * except Input for 100
		 * @return {String} className for Input field
		 */
	const getInputClassName = () => {
		return props.value < 100 ? 'component__input' : 'component__input component__input--hundreed';
	};

	/**
		 * Calls redux action on value change
		 * @return {void}
		 */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch(setInputValue({ row: lineIndex, col: colIndex, value: + e.currentTarget.value }));
	}

	/**
		 * Calls redux action on value change
		 * @return {void}
		 */
	const getDefaultValue = (): string => {
		// const value = "" + stateValues[lineIndex][colIndex];
		return stateValues[lineIndex][colIndex];
		// return value || "";
	};

	return (
		<div className="component">
			<div className="component__input-box">
				<input
					type="number"
					pattern="[0-9]*"
					inputMode="numeric"
					step="1"
					title=""
					placeholder=" "
					min={props.value}
					max={props.value}
					className={getInputClassName()}
					onKeyDown={(event) => handleKeyDown(event)}
					onChange={(event) => handleChange(event)}
					value={getDefaultValue()}
				/>
			</div>
			<div className="component__score">
				<div className="component__score-row">
					{[...Array(getTopLineDotsAmount())].map((x, i) => (
						<IconCircle key={i} className={`component__icon ${content.styles[i + 1]}`} />
					))}
				</div>
				<div className="component__score-row">
					{[...Array(props.line - getTopLineDotsAmount())].map((x, i) => (
						<IconCircle
							key={i + getRoundedHalfANumber(props.line)}
							className={`component__icon ${content.styles[i + 1 + getRoundedHalfANumber(props.line)]}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
});

export default TabCell;
