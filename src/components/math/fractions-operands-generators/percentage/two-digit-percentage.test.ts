import twoDigitPercentage from "./two-digit-percentage";

import { operations } from "../../../../TS/constants/constants";

describe("fractions - percentage - addition/subtraction - two digit percentage test suit", () => {
  const numberOfOperands = 2;

  it("should return array", () => {
    const result = twoDigitPercentage(operations.addition, numberOfOperands);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it("should return array with the length + 1 of the second parameter passed", () => {
    const numberOfOperands = 3;
    const result = twoDigitPercentage(operations.addition, numberOfOperands);

    expect(result.length).toEqual(numberOfOperands + 1);
  });

  it("should return array containing only numbers", () => {
    const result = twoDigitPercentage(operations.addition, numberOfOperands);

    expect(result.some((item) => typeof item !== "number")).toBeFalsy();
  });

  it("should return array where the last value is the sum of previous values if the first parameter is '+'", () => {
    const result = twoDigitPercentage(operations.addition, numberOfOperands);

    const sum = result
      .slice(0, result.length - 1)
      .reduce((acc, current) => acc + current);

    expect(sum).toEqual(result[result.length - 1]);
  });

  it("should return array where the first value is the sum of all the next values if the first parameter is '-'", () => {
    const result = twoDigitPercentage(operations.subtraction, numberOfOperands);

    const sum = result
      .slice(1, result.length)
      .reduce((acc, current) => acc + current);

    expect(sum).toEqual(result[0]);
  });

  it("should return an empty array if the first parameter is NOT '+' or '-'", () => {
    const result = twoDigitPercentage("", numberOfOperands);

    expect(result.length).toEqual(0);
  });

  it("should return an empty array if the second parameter is less than 2", () => {
    const numberOfOperands = 1;
    const result = twoDigitPercentage(operations.addition, numberOfOperands);

    expect(result.length).toEqual(0);
  });

  it("should return an empty array if the second parameter is null", () => {
    const numberOfOperands = null;

    // @ts-ignore
    const result = twoDigitPercentage(operations.addition, numberOfOperands);

    expect(result.length).toEqual(0);
  });
});
