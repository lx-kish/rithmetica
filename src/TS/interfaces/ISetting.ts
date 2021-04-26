export default interface ISetting extends Record<string, any> {
	operation: string;
	type: string;
	missing: string;
  numberOfOperands: number;
	quantity: number;
};
