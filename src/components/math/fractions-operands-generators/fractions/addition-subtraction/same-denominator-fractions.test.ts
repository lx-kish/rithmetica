import sameDenominatorFractions from "./same-denominator-fractions";

import { operations } from "../../../../../TS/constatnts/constants";

describe("fractions - addition/subtraction - same denominator fractions test suit", () => {
  it("should return array", () => {
    const numberOfOperands = 2;
    const result = sameDenominatorFractions(
      operations.addition,
      numberOfOperands
    );

    expect(Array.isArray(result)).toBeTruthy();
  });

  it("should return array containing only numbers", () => {
    const numberOfOperands = 2;
    const result = sameDenominatorFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.some((item) => typeof item !== "number")).toBeFalsy();
  });

  it("should return array with the length of 15 if the first parameter is '+'", () => {
    const numberOfOperands = 2;
    const result = sameDenominatorFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.length).toEqual(15);
  });

  it("should return array with the length of 15 if the first parameter is '-'", () => {
    const numberOfOperands = 2;
    const result = sameDenominatorFractions(
      operations.subtraction,
      numberOfOperands
    );

    expect(result.length).toEqual(15);
  });

  it("should return an empty array if the first parameter is NOT '+' or '-'", () => {
    const numberOfOperands = 2;
    const result = sameDenominatorFractions("", numberOfOperands);

    expect(result.length).toEqual(0);
  });

  it("should return an empty array if the second parameter is less than 2", () => {
    const numberOfOperands = 1;
    const result = sameDenominatorFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.length).toEqual(0);
  });

  it("should return an empty array if the second parameter is bigger than 2", () => {
    const numberOfOperands = 3;
    const result = sameDenominatorFractions(
      operations.multiplication,
      numberOfOperands
    );

    expect(result.length).toEqual(0);
  });

  it("should return an empty array if the second parameter is null", () => {
    const numberOfOperands = 1;

    // @ts-ignore
    const result = sameDenominatorFractions(operations.addition, null);

    expect(result.length).toEqual(0);
  });
});
