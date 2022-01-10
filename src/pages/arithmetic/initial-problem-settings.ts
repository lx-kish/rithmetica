import IArithmeticSetting from '../../TS/interfaces/IArithmeticSetting';

const initialProblemSettings: IArithmeticSetting[] = [
  {
    operation: '+',
    name: 'up to ten',
    type: 'equation',
    missing: 'random',
    numberOfOperands: 2,
    quantity: 8
  }
];

export default initialProblemSettings;