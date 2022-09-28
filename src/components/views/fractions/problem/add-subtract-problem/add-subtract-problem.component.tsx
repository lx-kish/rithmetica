import React from "react";

import Fraction from "../../../fraction/fraction.component";

import Sign from "../../../sign/sign.component";
import FractionInterim from "../../../fraction-results/fraction-interim.component";
import FractionInput from "../../../fraction-results/fraction-input.component";
import FractionInteger from "../../../fraction-results/fraction-integer.component";

import IFractionsProblem from "../../../../../TS/interfaces/IFractionsProblem";

interface IProps {
	content: IFractionsProblem[],
	stateProblemIndex: number,
};

const AddSubtract: React.FC<IProps> = (props) => {

	return (
		<div className="problem problem--fraction">
			{props.content.map((operand: Record<string, any>, i) => {
				let Element: any = null;
				switch (operand.type) {
					case "fraction":
						Element =
							<Fraction
								fraction={operand}
								className="fraction"
								key={`problem__fraction-${i}`}
							/>;
						break;

					case "sign":
						Element =
							<Sign
								sign={operand.value}
								className="fraction__sign"
								key={`problem__sign-${i}`}
							/>;
						break;

					case "interim":
						Element =
							<FractionInterim
								stateProblemIndex={props.stateProblemIndex}
								fraction={operand}
								className="fraction"
								key={`problem__fraction-${i}`}
							/>
						break;

					case "resultInteger":
					case "remainedInteger":
					case "simplifiedInteger":
						Element =
							<FractionInteger
								stateProblemIndex={props.stateProblemIndex}
								fraction={operand}
								type={operand.type}
								className="fraction"
								key={`problem__integer-${i}`}
							/>
						break;
					case "result":
					case "remained":
					case "simplified":
						Element =
							<React.Fragment key={`problem__fraction-${i}`}>
								<FractionInput
									stateProblemIndex={props.stateProblemIndex}
									fraction={operand}
									type={operand.type}
									className="fraction"
									key={`problem__fraction-${i}`}
								/>
							</React.Fragment>
						break;

					default:
						break;
				}
				return Element;
			})}
		</div>
	)
}

export default AddSubtract;
