import twoDigitDecimalsAddSubtract from "./two-digit-decimals-add-subtract";

import getRoundedToFixed from "../../../../../utils/get-rounded-to-fixed/get-rounded-to-fixed";
import { operations } from "../../../../../TS/constatnts/constants";

describe("fractions - decimals - addition/subtraction - two digit decimals add subtract test suit", () => {
  it("should return array", () => {
    const numberOfOperands = 2;
    const result = twoDigitDecimalsAddSubtract(
      operations.addition,
      numberOfOperands
    );

    expect(Array.isArray(result)).toBeTruthy();
  });

  it("should return array with the length + 1 of the second parameter passed", () => {
    const numberOfOperands = 3;
    const result = twoDigitDecimalsAddSubtract(
      operations.addition,
      numberOfOperands
    );

    expect(result.length).toEqual(numberOfOperands + 1);
  });

  it("should return array containing only numbers", () => {
    const numberOfOperands = 2;
    const result = twoDigitDecimalsAddSubtract(
      operations.addition,
      numberOfOperands
    );

    expect(result.some((item) => typeof item !== "number")).toBeFalsy();
  });

  it("should return array where the last value is the sum of previous values if the first parameter is '+'", () => {
    const numberOfOperands = 2;
    const result = twoDigitDecimalsAddSubtract(
      operations.addition,
      numberOfOperands
    );

    const sum = result
      .slice(0, result.length - 1)
      .reduce((acc, current) => getRoundedToFixed(acc + current, 1)); // need to round in order to get precise answer

    expect(sum).toEqual(result[result.length - 1]);
  });

  it("should return array where the first value is the sum of all the next values if the first parameter is '-'", () => {
    const numberOfOperands = 2;
    const result = twoDigitDecimalsAddSubtract(
      operations.subtraction,
      numberOfOperands
    );

    const sum = result
      .slice(1, result.length)
      .reduce((acc, current) => getRoundedToFixed(acc + current, 1)); // need to round in order to get precise answer

    expect(sum).toEqual(result[0]);
  });

  it("should return an empty array if the first parameter is NOT '+' or '-'", () => {
    const numberOfOperands = 2;
    const result = twoDigitDecimalsAddSubtract("", numberOfOperands);

    expect(result.length).toEqual(0);
  });

  it("should return an empty array if the second parameter is less than 2", () => {
    const numberOfOperands = 1;
    const result = twoDigitDecimalsAddSubtract(
      operations.addition,
      numberOfOperands
    );

    expect(result.length).toEqual(0);
  });

  it("should return an empty array if the second parameter is null", () => {
    const numberOfOperands = 1;

    // @ts-ignore
    const result = twoDigitDecimalsAddSubtract(operations.addition, null);

    expect(result.length).toEqual(0);
  });
});
