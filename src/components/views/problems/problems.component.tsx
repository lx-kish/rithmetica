import { ReactElement } from "react";

import { useAppSelector } from "../../../redux/hooks";
import { problems } from "../../../redux/problems/problemsSlice";

import ArithmeticProblem from "../problem/arithmetic.problem.component";
import FractionsProblem from "../problem/fractions.problem.component";
import DecimalsProblem from "../problem/decimals.problem.component";

import { IProblem, IProblemType } from "../../../TS/interfaces/interfaces";
import { TRoutes, TSections } from "../../../TS/types/types";

import getProblemTypeBySignature from "../../../utils/get-problem-type/get-problem-type";
import { uiType } from "../../../TS/constants/constants";

interface IDerivedProblemsState {
  problemsId: string;
  problemType: IProblemType;
  problems: IProblem[][];
}

interface IProps {
  pageName: string;
}

function Problems({ pageName }: IProps): ReactElement {
  const stateProblems = useAppSelector(problems);

  const pageStateProblems = stateProblems.filter(
    (problemType) =>
      problemType.page === pageName && problemType.problems.length > 0
  );

  const derivedProblems: IDerivedProblemsState[] = [];

  pageStateProblems.forEach((stateProblemType) => {
    const problemType = getProblemTypeBySignature({
      name: stateProblemType.name as string,
      operation: stateProblemType.operation as string,
      route: stateProblemType.page as TRoutes,
      section: stateProblemType?.section as TSections,
    });

    derivedProblems.push({
      problemsId: stateProblemType.id || "",
      problemType: problemType,
      problems: stateProblemType.problems,
    });
  });

  /**
   * The following algorithm explained in details at:
   * https://stackoverflow.com/questions/42391499/react-render-new-row-every-4th-column
   */

  /**
   * array of @cols elements, where @cols is the number of rows needed
   * @arr <Array> - the given array of rendering elements
   * @cols <Number> - the number of columns in a row
   */
  function rows(arr: IProblem[][], cols: number) {
    return [...Array(Math.ceil(arr.length / cols))];
  }

  // chunk the problems into the array of rows
  function contentRows(arr: IProblem[][], cols: number) {
    return rows(arr, cols).map((row, idx: number) =>
      arr.slice(idx * cols, idx * cols + cols)
    );
  }

  return (
    <section className="problems">
      {derivedProblems.map(
        (problemType) =>
          problemType.problemType.page === pageName &&
          contentRows(
            problemType.problems.filter((problem) => problem),
            Number(problemType.problemType.colPerRow)
          ).map((row, i) => (
            <div key={i} className="problem__row">
              {row.map(
                (problem, j) =>
                  (problemType.problemType.uiType === uiType.arithmetic && (
                    <ArithmeticProblem
                      key={j}
                      problemStateId={problemType.problemsId}
                      content={problem}
                      stateProblemIndex={problemType.problems.indexOf(problem)}
                    />
                  )) ||
                  (problemType.problemType.uiType === uiType.fractions && (
                    <FractionsProblem
                      key={j}
                      problemStateId={problemType.problemsId}
                      content={problem}
                      stateProblemIndex={problemType.problems.indexOf(problem)}
                    />
                  )) ||
                  (problemType.problemType.uiType === uiType.decimals && (
                    <DecimalsProblem
                      key={j}
                      problemStateId={problemType.problemsId}
                      content={problem}
                      stateProblemIndex={problemType.problems.indexOf(problem)}
                    />
                  ))
              )}
            </div>
          ))
      )}
    </section>
  );
}

export default Problems;
