import { IProblemType } from "../../TS/interfaces/interfaces";
import { TRoutes } from "../../TS/types/types";
import ProblemTypes from "../../components/math/problem-types";

/**
 * Returns problem type by it's page, name, and operation
 *
 * @param  {string} name name of type
 *
 * @param  {string} operation operation
 *
 * @param  {TRoutes} pageName name of a page
 *
 * @return {IProblemType}
 */
const getProblemTypeBySignature = (signature: {
  name: string;
  operation: string;
  route: TRoutes;
  section?: string;
}): IProblemType => {
  const { name, operation, route, section } = signature;
  let problemType!: IProblemType;

  try {
    problemType = ProblemTypes.find(
      (type) =>
        type.name === name &&
        type.operation === operation &&
        type.page === route
    ) as IProblemType;

    if (section) {
      problemType = ProblemTypes.find(
        (type) =>
          type.name === name &&
          type.operation === operation &&
          type.page === route &&
          type.section === section
      ) as IProblemType;
    }
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }

  return problemType;
};

export default getProblemTypeBySignature;
