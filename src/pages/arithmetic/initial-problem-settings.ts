import { arithmeticMissing } from "../../TS/constatnts/constants";
import { ISettings } from "../../TS/interfaces/interfaces";

const initialProblemSettings: ISettings[] = [
  {
    operation: "+",
    name: "up to ten",
    type: "equation",
    missing: arithmeticMissing.random,
    numberOfOperands: 2,
    quantity: 8,
  },
];

export default initialProblemSettings;
