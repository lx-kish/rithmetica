import { ISettings, IProblem } from "../../../TS/interfaces/interfaces";
import { TSections } from "../../../TS/types/types";

import getProblemTypeBySignature from "../../../utils/get-problem-type/get-problem-type";

/**
 *
 */
function problemsController(stateProblemType: ISettings): IProblem[][] {
  let problemsSet: IProblem[][] = [];

  try {
    const problemType = getProblemTypeBySignature({
      name: stateProblemType.name,
      operation: stateProblemType.operation,
      route: stateProblemType.page,
      section: stateProblemType?.section,
    });

    if (!problemType)
      throw new Error(
        `Controller failed to find ptoblem type with signature: name: ${stateProblemType.name}, operation: ${stateProblemType.operation}, pageName: ${stateProblemType.page}`
      );

    const problemsFactory = problemType.factory;

    if (!problemsFactory)
      throw new Error(
        `Controller failed to find problem factory with the signature: : name: ${stateProblemType.name}, operation: ${stateProblemType.operation}, page: ${stateProblemType.page}`
      );

    problemsSet = problemsFactory(
      stateProblemType.page,
      stateProblemType.name,
      stateProblemType.operation,
      stateProblemType.numberOfOperands,
      stateProblemType.quantity,
      stateProblemType?.missing,
      stateProblemType?.section as TSections
    );

    if (!problemsSet) {
      throw new Error("Wrong type of operands processor in the settings!");
    }
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
  return problemsSet;
}

export default problemsController;
