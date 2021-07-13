import IAdditionSubtractionSetting from '../../TS/interfaces/IAdditionSubtractionSetting';

const initialProblemSettings: IAdditionSubtractionSetting[] = [
  {
    operation: 'addition',
    type: 'up to ten',
    missing: 'result',
    numberOfOperands: 2,
    quantity: 8
  }
];

export default initialProblemSettings;