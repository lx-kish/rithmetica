import problemsFactory from "./problem-processing/problems-factory";

import IFractionsSetting from "../../../TS/interfaces/IFractionsSetting";
import IFractionsProblem from "../../../TS/interfaces/IFractionsProblem";

/**
 *
 */
const fractionsProblemsController = (
  problemDescriptions: IFractionsSetting[]
): IFractionsProblem[][] | undefined => {
  try {
    const problems: IFractionsProblem[][] = [];

    problemDescriptions.forEach((type: IFractionsSetting) => {
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
};

export default fractionsProblemsController;
