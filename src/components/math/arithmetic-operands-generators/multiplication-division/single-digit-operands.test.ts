import singleDigitOperands from "./single-digit-operands";

import { operations } from "../../../../TS/constants/constants";

describe("arythmetic - multiplication/division - single digit operands test suit", () => {
  const numberOfOperands = 2;

  it("should return array", () => {
    const result = singleDigitOperands(
      operations.multiplication,
      numberOfOperands
    );

    expect(Array.isArray(result)).toBeTruthy();
  });

  it("should return array with the length + 1 of the second parameter passed", () => {
    const numberOfOperands = 5;
    const result = singleDigitOperands(
      operations.multiplication,
      numberOfOperands
    );

    expect(result.length).toEqual(numberOfOperands + 1);
  });

  it("should return array containing only numbers", () => {
    const result = singleDigitOperands(
      operations.multiplication,
      numberOfOperands
    );

    expect(result.some((item) => typeof item !== "number")).toBeFalsy();
  });

  it("should return array where the last value is the product of previous values if the first parameter is '×'", () => {
    const result = singleDigitOperands(
      operations.multiplication,
      numberOfOperands
    );

    const sum = result
      .slice(0, result.length - 1)
      .reduce((acc, current) => acc * current);

    expect(sum).toEqual(result[result.length - 1]);
  });

  it("should return array where the first value is the product of all the next values if the first parameter is '÷'", () => {
    const result = singleDigitOperands(operations.division, numberOfOperands);

    const sum = result
      .slice(1, result.length)
      .reduce((acc, current) => acc * current);

    expect(sum).toEqual(result[0]);
  });

  it("should return an empty array if the first parameter is NOT '×' or '÷'", () => {
    const result = singleDigitOperands("", numberOfOperands);

    expect(result.length).toEqual(0);
  });

  it("should return an empty array if the second parameter is less than 2", () => {
    const numberOfOperands = 1;
    const result = singleDigitOperands(
      operations.multiplication,
      numberOfOperands
    );

    expect(result.length).toEqual(0);
  });

  it("should return an empty array if the second parameter is null", () => {
    const numberOfOperands = null;

    const result = singleDigitOperands(
      operations.multiplication,
      // @ts-ignore
      numberOfOperands
    );

    expect(result.length).toEqual(0);
  });
});
