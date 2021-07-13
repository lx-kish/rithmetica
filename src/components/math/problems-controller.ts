import problemsFactory from './problem-processing/problems-factory';

import IAdditionSubtractionSetting from '../../TS/interfaces/IAdditionSubtractionSetting';
import IProblem from '../../TS/interfaces/IProblem';

/**
 * 
 */
const problemsController = (problemDescriptions: IAdditionSubtractionSetting[]): IProblem[][] => {

  try {
    // console.log(
    //   '%c arguments of problem-controller ===> ',
    //   'color: orangered; font-weight: bold;',
    //   problemDescriptions
    // );
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

    // console.log(
    //   '%c problems from problem-controller ===> ',
    //   'color: yellowgreen; font-weight: bold;',
    //   problems,
    //   ' time stamp ===> ',
    //   new Date() / 1e3 | 0
    // );

    return problems;
  }
  catch (e) {
    throw new Error(e);
  }
};

export default problemsController;