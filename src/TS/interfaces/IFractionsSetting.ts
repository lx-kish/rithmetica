export default interface IFractionsSetting extends Record<string, any> {
	section: string;
	operation: string;
	name: string;
	type: string;
  numberOfOperands: number;
	quantity: number;
};
