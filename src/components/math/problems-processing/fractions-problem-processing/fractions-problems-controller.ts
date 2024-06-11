import problemsFactory from "./problems-factory";

import { IProblem, ISettings } from "../../../../TS/interfaces/interfaces";

/**
 *
 */
function fractionsProblemsController(
  problemDescriptions: ISettings[]
): IProblem[][] | undefined {
  const problems: IProblem[][] = [];
  try {
    problemDescriptions.forEach((type: ISettings) => {
      const problemsSet = problemsFactory(
        type.name,
        type.type,
        type.operation,
        type.numberOfOperands,
        type.quantity
      );

      if (!problemsSet) {
        throw new Error("Wrong type of operands processor in the settings!");
      }

      problems.push(...problemsSet);
    });

    return problems;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
}

export default fractionsProblemsController;
