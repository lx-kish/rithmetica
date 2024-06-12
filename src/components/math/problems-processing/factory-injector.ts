import ProblemTypes from "../problem-types";

import { TRoutes } from "../../../TS/types/types";
import {
  IProblemType,
  IProblemsFactory,
} from "../../../TS/interfaces/interfaces";

function factoryInjector(
  name: string,
  operation: string,
  sliceName: string,
  functionType: string
) {
  let func: IProblemsFactory | undefined;

  try {
    const problemType = ProblemTypes.find(
      (type) =>
        type.name === name &&
        type.operation === operation &&
        type.page === (`/${sliceName}` as TRoutes)
    );

    if (!problemType)
      throw new Error(
        `Injector failed to find ptoblem type with signature: name: ${name}, operation: ${operation}, sliceName: ${sliceName}`
      );

    func = problemType[
      functionType as unknown as keyof IProblemType
    ] as IProblemsFactory;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
  return func;
}

export default factoryInjector;
