import singleDigitDifferentDenominatorsFractions from "./single-digit-different-denominators-fractions";

import { operations } from "../../../../../TS/constants/constants";

describe("fractions - addition/subtraction - 1-digit different denominators fractions test suit", () => {
  const numberOfOperands = 2;

  it("should return object", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(
      typeof result === "object" && !Array.isArray(result) && result !== null
    ).toBeTruthy();
  });

  it("should return object containing 17 keys", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(Object.keys(result).length).toEqual(17);
  });

  it("should return object containing 'operation' key (1)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("operation")).toBeTruthy();
  });

  it("should return object containing 'firstDenominator' key (2)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );
    expect(result.hasOwnProperty("secondDenominator")).toBeTruthy();
  });

  it("should return object containing 'secondDenominator' key (3)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("secondDenominator")).toBeTruthy();
  });

  it("should return object containing 'resultDenominator' key (4)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("resultDenominator")).toBeTruthy();
  });

  it("should return object containing 'firstNumerator' key (5)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("firstNumerator")).toBeTruthy();
  });

  it("should return object containing 'secondNumerator' key (6)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("secondNumerator")).toBeTruthy();
  });

  it("should return object containing 'interimNumerator1' key (7)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("interimNumerator1")).toBeTruthy();
  });

  it("should return object containing 'interimNumerator2' key (8)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("interimNumerator2")).toBeTruthy();
  });

  it("should return object containing 'interimDenominator1' key (9)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("interimDenominator1")).toBeTruthy();
  });

  it("should return object containing 'interimDenominator2' key (10)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("interimDenominator2")).toBeTruthy();
  });

  it("should return object containing 'commonDenominator' key (11)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("commonDenominator")).toBeTruthy();
  });

  it("should return object containing 'integer' key (12)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("integer")).toBeTruthy();
  });

  it("should return object containing 'remainedNumerator' key (13)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("remainedNumerator")).toBeTruthy();
  });

  it("should return object containing 'remainedDenominator' key (14)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("remainedDenominator")).toBeTruthy();
  });

  it("should return object containing 'resultNumerator' key (15)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("resultNumerator")).toBeTruthy();
  });

  it("should return object containing 'simplifiedNumerator' key (16)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("simplifiedNumerator")).toBeTruthy();
  });

  it("should return object containing 'simplifiedDenominator' key (17)", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      operations.addition,
      numberOfOperands
    );

    expect(result.hasOwnProperty("simplifiedDenominator")).toBeTruthy();
  });

  it("should return object containing all nullish values if the first parameter is NOT '+' or '-'", () => {
    const result = singleDigitDifferentDenominatorsFractions(
      "",
      numberOfOperands
    );

    expect(
      result.operation === "" &&
        result.firstDenominator === 0 &&
        result.secondDenominator === 0 &&
        result.resultDenominator === 0 &&
        result.firstNumerator === 0 &&
        result.secondNumerator === 0 &&
        result.interimNumerator1 === 0 &&
        result.interimNumerator2 === 0 &&
        result.interimDenominator1 === 0 &&
        result.interimDenominator2 === 0 &&
        result.commonDenominator === 0 &&
        result.integer === 0 &&
        result.remainedNumerator === 0 &&
        result.remainedDenominator === 0 &&
        result.resultNumerator === 0 &&
        result.simplifiedNumerator === 0 &&
        result.simplifiedDenominator === 0
    ).toBeTruthy();
  });
});
