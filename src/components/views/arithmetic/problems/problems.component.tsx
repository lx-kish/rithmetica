import { ReactElement } from "react";

import { useAppSelector } from "../../../../redux/hooks";
import {
  columns,
  problems,
} from "../../../../redux/arithmetic/arithmeticSlice";

import Problem from "../problem/problem.component";

import { IProblem } from "../../../../TS/interfaces/interfaces";

function Problems(): ReactElement {
  const stateProblems = useAppSelector(problems);
  const stateColumns = useAppSelector(columns);

  /**
   * The following algorithm explained in details at:
   * https://stackoverflow.com/questions/42391499/react-render-new-row-every-4th-column
   */

  /**
   * array of @cols elements, where @cols is the number of rows needed
   * @arr <Array> - the given array of rendering elements
   * @cols <Number> - the number of columns in a row
   */
  const rows = (arr: IProblem[][], cols: number) => [
    ...Array(Math.ceil(arr.length / cols)),
  ];

  // chunk the problems into the array of rows
  const contentRows = (arr: IProblem[][], cols: number) =>
    rows(arr, cols).map((row, idx: number) =>
      arr.slice(idx * cols, idx * cols + cols)
    );

  return (
    <div className="problems">
      {contentRows(stateProblems, stateColumns).map((row, i) => (
        <div key={i} className="problem__row">
          {row.map((problem, j) => (
            <Problem
              key={j}
              content={problem}
              stateProblemIndex={stateProblems.indexOf(problem)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Problems;
