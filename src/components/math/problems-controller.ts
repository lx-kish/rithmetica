import problemsFactory from './problem-processing/problems-factory';

import IAdditionSubtractionSetting from '../../TS/interfaces/IAdditionSubtractionSetting';
import IProblem from '../../TS/interfaces/IProblem';

/**
 * 
 */
const problemsController = (problemDescriptions: IAdditionSubtractionSetting[]): IProblem[][] => {

  try {

    const problems: IProblem[][] = [];
    // const problems: { type: string; value: string }[][] = [];

    problemDescriptions.forEach((type: IAdditionSubtractionSetting) => {

      problems.push(...problemsFactory(
        type.type,
        type.operation,
        type.numberOfOperands,
        type.missing,
        type.quantity
      ));

    });

    return problems;
  }
  catch (e) {
    throw new Error(e);
  }
};

export default problemsController;