import { ISettings, IProblem } from "../../../TS/interfaces/interfaces";
import { TSections } from "../../../TS/types/types";

import getProblemTypeBySignature from "../../../utils/get-problem-type/get-problem-type";

/**
 *
 */
function problemsController(settings: ISettings[]): IProblem[][] {
  const problems: IProblem[][] = [];

  try {
    settings.forEach((type: ISettings) => {
      const problemType = getProblemTypeBySignature({
        name: type.name,
        operation: type.operation,
        route: type.page,
        section: type?.section,
      });

      if (!problemType)
        throw new Error(
          `Controller failed to find ptoblem type with signature: name: ${type.name}, operation: ${type.operation}, pageName: ${type.page}`
        );

      const problemsFactory = problemType.factory;

      if (!problemsFactory)
        throw new Error(
          `Controller failed to find problem factory with the signature: : name: ${type.name}, operation: ${type.operation}, page: ${type.page}`
        );

      const problemsSet = problemsFactory(
        type.page,
        type.name,
        type.operation,
        type.numberOfOperands,
        type.quantity,
        type?.missing,
        type?.section as TSections
      );

      if (!problemsSet) {
        throw new Error("Wrong type of operands processor in the settings!");
      }

      problems!.push(...problemsSet);
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
