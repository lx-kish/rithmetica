import factoryInjector from "./factory-injector";

import { ISettings, IProblem } from "../../../TS/interfaces/interfaces";

/**
 *
 */
function problemsController(
  problemDescriptions: ISettings[],
  sliceName: string
): IProblem[][] | undefined {
  const problems: IProblem[][] = [];

  try {
    problemDescriptions.forEach((type: ISettings) => {
      const problemsFactory = factoryInjector(
        type.name,
        type.operation,
        sliceName,
        "factory"
      );

      if (!problemsFactory)
        throw new Error(
          `Controller failed to find problem factory with the signature: : name: ${type.name}, operation: ${type.operation}, sliceName: ${sliceName}`
        );

      const problemsSet = problemsFactory(
        type.name,
        type.type,
        type.operation,
        type.numberOfOperands,
        type.quantity,
        type?.missing
      );

      if (!problemsSet) {
        throw new Error("Wrong type of operands processor in the settings!");
      }

      problems.push(...problemsSet);
    });
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
  return problems;
}

export default problemsController;
