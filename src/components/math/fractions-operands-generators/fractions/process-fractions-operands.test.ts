import processFractionsOperands from "./process-fractions-operands";

import getGreatestCommonDivisor from "../../../../utils/get-greatest-common-divisor/get-greatest-common-divisor";

describe("fractions - process fractions operands test suit", () => {
  // addition-subtraction
  // full cycle fraction: 6/8 + 3/4
  const fractionGeneratedOperands = {
    operation: "+",
    firstDenominator: 8,
    secondDenominator: 4,
    resultDenominator: 8,
    firstNumerator: 6,
    secondNumerator: 3,
    interimNumerator1: 6,
    interimNumerator2: 6,
    interimDenominator1: 8,
    interimDenominator2: 0,
    resultNumerator: 12,
  };
  // // multiplication-division
  // // fraction: 1/2 * 2/5
  // const fractionGeneratedOperands = {
  //   operation: "×",
  //   firstDenominator: 2,
  //   secondDenominator: 5,
  //   resultDenominator: 10,
  //   firstNumerator: 1,
  //   secondNumerator: 2,
  //   interimNumerator1: 1,
  //   interimNumerator2: 2,
  //   interimDenominator1: 2,
  //   interimDenominator2: 5,
  //   resultNumerator: 2,
  // };

  it("should return object", () => {
    const numberOfOperands = 2;
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(
      typeof result === "object" && !Array.isArray(result) && result !== null
    ).toBeTruthy();
  });

  it("should return object containing 17 keys", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(Object.keys(result).length).toEqual(17);
  });

  it("should return object containing 'operation' key (1)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("operation")).toBeTruthy();
  });

  it("should return object containing 'firstDenominator' key (2)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);
    expect(result.hasOwnProperty("secondDenominator")).toBeTruthy();
  });

  it("should return object containing 'secondDenominator' key (3)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("secondDenominator")).toBeTruthy();
  });

  it("should return object containing 'resultDenominator' key (4)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("resultDenominator")).toBeTruthy();
  });

  it("should return object containing 'firstNumerator' key (5)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("firstNumerator")).toBeTruthy();
  });

  it("should return object containing 'secondNumerator' key (6)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("secondNumerator")).toBeTruthy();
  });

  it("should return object containing 'interimNumerator1' key (7)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("interimNumerator1")).toBeTruthy();
  });

  it("should return object containing 'interimNumerator2' key (8)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("interimNumerator2")).toBeTruthy();
  });

  it("should return object containing 'interimDenominator1' key (9)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("interimDenominator1")).toBeTruthy();
  });

  it("should return object containing 'interimDenominator2' key (10)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("interimDenominator2")).toBeTruthy();
  });

  it("should return object containing 'commonDenominator' key (11)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("commonDenominator")).toBeTruthy();
  });

  it("should return object containing 'integer' key (12)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("integer")).toBeTruthy();
  });

  it("should return object containing 'remainedNumerator' key (13)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("remainedNumerator")).toBeTruthy();
  });

  it("should return object containing 'remainedDenominator' key (14)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("remainedDenominator")).toBeTruthy();
  });

  it("should return object containing 'resultNumerator' key (15)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("resultNumerator")).toBeTruthy();
  });

  it("should return object containing 'simplifiedNumerator' key (16)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("simplifiedNumerator")).toBeTruthy();
  });

  it("should return object containing 'simplifiedDenominator' key (17)", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    expect(result.hasOwnProperty("simplifiedDenominator")).toBeTruthy();
  });

  // case 1: x/y - x/y
  const case1FractionGeneratedOperands = {
    operation: "-",
    firstDenominator: 5,
    secondDenominator: 5,
    resultDenominator: 5,
    firstNumerator: 3,
    secondNumerator: 3,
    interimNumerator1: 3,
    interimNumerator2: 3,
    interimDenominator1: 5,
    interimDenominator2: 5,
    resultNumerator: 0,
  };
  it("should return object containing 'integer' key equal 0 in case 1: x/y - x/y", () => {
    const result = processFractionsOperands(case1FractionGeneratedOperands);

    expect(result.integer).toEqual(0);
  });

  it("should return object containing 'remainedNumerator' key equal 0 in case 1: x/y - x/y", () => {
    const result = processFractionsOperands(case1FractionGeneratedOperands);

    expect(result.remainedNumerator).toEqual(0);
  });

  it("should return object containing 'remainedNumerator' key equal 0 in case 1: x/y - x/y", () => {
    const result = processFractionsOperands(case1FractionGeneratedOperands);

    expect(result.remainedDenominator).toEqual(0);
  });

  case1FractionGeneratedOperands.operation = "+";
  it("should return object containing 'remainedNumerator' key NOT equal 0 in case 1: x/y - x/y if the operation is not '-'", () => {
    const result = processFractionsOperands(case1FractionGeneratedOperands);

    expect(result.remainedDenominator).toEqual(0);
  });

  // case 2: mixed fraction, resultNumerator > resultDenominator
  const case2FractionGeneratedOperands = {
    operation: "+",
    firstDenominator: 7,
    secondDenominator: 3,
    resultDenominator: 21,
    firstNumerator: 3,
    secondNumerator: 2,
    interimNumerator1: 9,
    interimNumerator2: 14,
    interimDenominator1: 21,
    interimDenominator2: 0,
    resultNumerator: 23,
  };
  it("should return object containing 'integer' key equal the whole part of resultNumerator / resultDenominator in case 2: mixed fraction", () => {
    const result = processFractionsOperands(case2FractionGeneratedOperands);

    const testValue = Math.trunc(
      case2FractionGeneratedOperands.resultNumerator /
        case2FractionGeneratedOperands.resultDenominator
    );

    expect(result.integer).toEqual(testValue);
  });

  it("should return object containing 'remainedNumerator' key equal the remainder of resultNumerator / resultDenominator in case 2: mixed fraction", () => {
    const result = processFractionsOperands(case2FractionGeneratedOperands);

    const testValue = Math.trunc(
      case2FractionGeneratedOperands.resultNumerator %
        case2FractionGeneratedOperands.resultDenominator
    );

    expect(result.remainedNumerator).toEqual(testValue);
  });

  it("should return object containing 'remainedDenominator' key equal the resultDenominator in case 2: mixed fraction", () => {
    const result = processFractionsOperands(case2FractionGeneratedOperands);

    expect(result.remainedDenominator).toEqual(
      case2FractionGeneratedOperands.resultDenominator
    );
  });

  // case 3: the result is the whole number without a remainder
  const case3FractionGeneratedOperands = {
    operation: "+",
    firstDenominator: 6,
    secondDenominator: 3,
    resultDenominator: 6,
    firstNumerator: 10,
    secondNumerator: 6,
    interimNumerator1: 10,
    interimNumerator2: 8,
    interimDenominator1: 6,
    interimDenominator2: 0,
    resultNumerator: 18,
  };
  it("should return object containing 'integer' key equal resultNumerator / resultDenominator in case 3: whole number without a remainder", () => {
    const result = processFractionsOperands(case3FractionGeneratedOperands);

    expect(result.integer).toEqual(3);
  });

  it("should return object containing 'remainedNumerator' key equal 0 in case 3: whole number without a remainder", () => {
    const result = processFractionsOperands(case3FractionGeneratedOperands);

    expect(result.remainedNumerator).toEqual(0);
  });

  it("should return object containing 'remainedDenominator' key equal 0 in case 3: whole number without a remainder", () => {
    const result = processFractionsOperands(case3FractionGeneratedOperands);

    expect(result.remainedDenominator).toEqual(0);
  });

  // simplified tests
  it("should return object containing 'simplifiedNumerator' key equal quotient of 'remaindNumerator' / greatest common divisor of 'resultNumerator' and 'resultDenominator'", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    const gcd = getGreatestCommonDivisor(
      fractionGeneratedOperands.resultNumerator,
      fractionGeneratedOperands.resultDenominator
    );

    const testValue = result.remainedNumerator / gcd;

    expect(result.simplifiedNumerator).toEqual(testValue);
  });

  it("should return object containing 'simplifiedDenominator' key equal quotient of 'remainedDenominator' / greatest common divisor of 'resultNumerator' and 'resultDenominator'", () => {
    const result = processFractionsOperands(fractionGeneratedOperands);

    const gcd = getGreatestCommonDivisor(
      fractionGeneratedOperands.resultNumerator,
      fractionGeneratedOperands.resultDenominator
    );

    const testValue = result.remainedDenominator / gcd;

    expect(result.simplifiedDenominator).toEqual(testValue);
  });
});
