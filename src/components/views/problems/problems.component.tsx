import { ReactElement } from "react";

import { useAppSelector } from "../../../redux/hooks";
import { problems as arithmeticProblem } from "../../../redux/arithmetic/arithmeticSlice";
import { problems as fractionsProblems } from "../../../redux/fractions/fractionsSlice";

import ArithmeticProblem from "../arithmetic/problem/problem.component";
import FractionsProblem from "../fractions/problem/problem.component";
import DecimalsProblem from "../decimals/problem/problem.component";

import { IProblem, IProblemType } from "../../../TS/interfaces/interfaces";
import { TRoutes, TSections } from "../../../TS/types/types";

import getProblemTypeBySignature from "../../../utils/get-problem-type/get-problem-type";
import { uiType } from "../../../TS/constatnts/constants";

interface IDerivedProblemsState {
  problemType: IProblemType;
  problems: IProblem[][];
}

interface IProps {
  pageName: string;
}

function Problems({ pageName }: IProps): ReactElement {
  const arithmeticStateProblems = useAppSelector(arithmeticProblem);
  const fractionsStateProblems = useAppSelector(fractionsProblems);

  function getDerivedState(
    problemsArr: IProblem[][],
    derivedObject: IDerivedProblemsState[]
  ) {
    for (let i = 0; i < problemsArr.length; i++) {
      const type = problemsArr[i]!.find((operand) => operand.type === "type");

      const problemType = getProblemTypeBySignature({
        name: type?.name as string,
        operation: type?.operation as string,
        route: type?.route as TRoutes,
        section: type?.section as TSections,
      });

      const derivedType = derivedObject.find(
        (derivedProbl) => derivedProbl.problemType === problemType
      );

      if (!derivedType) {
        const problems = [];
        problems[i] = problemsArr[i];
        derivedObject.push({
          problemType: problemType,
          problems,
        });
      }
      if (derivedType) {
        const derivedTypeIndex = derivedObject.indexOf(derivedType);

        derivedObject[derivedTypeIndex].problems[i] = problemsArr[i];
      }
    }
  }

  const derivedProblems: IDerivedProblemsState[] = [];

  getDerivedState(arithmeticStateProblems, derivedProblems);
  getDerivedState(fractionsStateProblems, derivedProblems);

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
    <div className="problems">
      {derivedProblems.map(
        (problemType) =>
          problemType.problemType.page === pageName &&
          contentRows(
            problemType.problems,
            Number(problemType.problemType.colPerRow)
          ).map((row, i) => (
            <div key={i} className="problem__row">
              {row.map(
                (problem, j) =>
                  (problemType.problemType.uiType === uiType.arithmetic && (
                    <ArithmeticProblem
                      key={j}
                      content={problem}
                      stateProblemIndex={problemType.problems.indexOf(problem)}
                    />
                  )) ||
                  (problemType.problemType.uiType === uiType.fractions && (
                    <FractionsProblem
                      key={j}
                      content={problem}
                      stateProblemIndex={problemType.problems.indexOf(problem)}
                    />
                  )) ||
                  (problemType.problemType.uiType === uiType.decimals && (
                    <DecimalsProblem
                      key={j}
                      content={problem}
                      stateProblemIndex={problemType.problems.indexOf(problem)}
                    />
                  ))
              )}
            </div>
          ))
      )}
    </div>
  );
}

export default Problems;
