import problemsFactory from './problem-processing/problems-factory';

import IArithmeticSetting from '../../TS/interfaces/IArithmeticSetting';
import IProblem from '../../TS/interfaces/IProblem';

/**
 * 
 */
const problemsController = (problemDescriptions: IArithmeticSetting[]): IProblem[][] => {

  try {

    const problems: IProblem[][] = [];

    problemDescriptions.forEach((type: IArithmeticSetting) => {

      problems.push(...problemsFactory(
        type.name,
        type.type,
        type.operation,
        type.numberOfOperands,
        type.missing,
        type.quantity,
      ));

    });

    return problems;
  }
  catch (e: any) {
    throw new Error(e.message);
  }
};

export default problemsController;