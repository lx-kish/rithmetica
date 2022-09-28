import React from 'react';

import EquationProblem from './equation-problem/equation-problem.component';
import StripDiagram from './strip-diagram/strip-diagram.component';

import IProblem from '../../../../TS/interfaces/IProblem';

interface IProps {
	stateProblemIndex: number,
	content: IProblem[],
};

const Problem: React.FC<IProps> = (props) => {

	const { stateProblemIndex, content } = props;

	// const stateProblems = useAppSelector(problems);

	// const dispatch = useAppDispatch();

	// const processKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
	// 	handleKeyDown(e);
	// }

	// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	dispatch(setInputValue({ index: props.stateIndex, value: e.currentTarget.value }));
	// }

	// const renderProblem = () => {
	let renderedElement: any = null;

	const problemType = props.content.find(operand => operand.type === "type")?.value || "";
	if (problemType === "equation") {

		renderedElement = <EquationProblem stateProblemIndex={stateProblemIndex} content={content} />;
		// renderedElement = props.content.map((operand: { type: string, value: string }, i) => <EquationProblem key={i} operand={operand} index={i} stateIndex={stateIndex} />);
	}

	if (problemType === "strip-diagram") {

		renderedElement = <StripDiagram stateProblemIndex={stateProblemIndex} content={content} />;
	}
	return <>{renderedElement}</>;
	// {/* // } */ }

	// {/* return <>{renderProblem()}</>; */ }
};

export default Problem;
