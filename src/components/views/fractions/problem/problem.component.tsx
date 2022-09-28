import React from 'react';

import AddSubtract from './add-subtract-problem/add-subtract-problem.component';

import IFractionsProblem from '../../../../TS/interfaces/IFractionsProblem';

interface IProps {
	stateProblemIndex: number,
	content: IFractionsProblem[],
};

const Problem: React.FC<IProps> = (props) => {

	const { stateProblemIndex, content } = props;

	let renderedElement: any = null;

	const problemType = props.content.find(operand => operand.type === "type")?.value || "";

	if (problemType === "fractionsAddSubtract") {
		renderedElement = <AddSubtract stateProblemIndex={stateProblemIndex} content={content} />;
	}

	// if (problemType === "strip-diagram") {

	// 	renderedElement = <StripDiagram stateIndex={stateIndex} content={content} />;
	// }
	return <>{renderedElement}</>;
};

export default Problem;
