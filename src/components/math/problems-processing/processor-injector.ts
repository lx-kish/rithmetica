import ProblemTypes from "../problem-types";

import { TRoutes } from "../../../TS/types/types";
import {
  IArithmeticProcessor,
  IFractionsProcessor,
  IProblemType,
} from "../../../TS/interfaces/interfaces";

function processorInjector(name: string, operation: string, page: TRoutes) {
  let func: IFractionsProcessor | IArithmeticProcessor | undefined;

  try {
    const problemType = ProblemTypes.find(
      (type) =>
        type.name === name && type.operation === operation && type.page === page
    );

    if (!problemType)
      throw new Error(
        `Injector failed to find ptoblem type with signature: name: ${name}, operation: ${operation}, page: ${page}`
      );

    func = problemType["processor" as unknown as keyof IProblemType] as
      | IArithmeticProcessor
      | IFractionsProcessor;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
  return func;
}

export default processorInjector;
