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
};

export default Problem;
