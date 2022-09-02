import problemsFactory from './problem-processing/problems-factory';

import IArithmeticSetting from '../../TS/interfaces/IArithmeticSetting';
import IProblem from '../../TS/interfaces/IProblem';

/**
 * 
 */
const problemsController = (problemDescriptions: IArithmeticSetting[]): IProblem[][] | undefined => {

  const problems: IProblem[][] = [];

  try {

    problemDescriptions.forEach((type: IArithmeticSetting) => {

      const problemsSet = problemsFactory(
        type.name,
        type.type,
        type.operation,
        type.numberOfOperands,
        type.missing,
        type.quantity,
      );

      if (!problemsSet) {
        throw new Error("Wrong type of operands processor in the settings!");
      }
      problems.push(...problemsSet);

    });

    return problems;
  }
  catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else if (typeof e === "string") {
      throw new Error(e);
    }
  }
};

export default problemsController;