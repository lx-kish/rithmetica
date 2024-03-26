import problemsFactory from "./arithmetic/problem-processing/problems-factory";

import { ISettings, IProblem } from "../../TS/interfaces/interfaces";

/**
 *
 */
function problemsController(
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
        type.missing,
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

export default problemsController;
