export default interface IArithmeticSetting extends Record<string, any> {
	operation: string;
	name: string;
	type: string;
	missing: string;
  numberOfOperands: number;
	quantity: number;
};
