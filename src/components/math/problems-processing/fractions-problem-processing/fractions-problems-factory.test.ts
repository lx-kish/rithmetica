import fractionsProblemsFactory from "./fractions-problems-factory";

import { routes, sections } from "../../../../TS/constatnts/constants";
import { operations } from "../../../../TS/constatnts/constants";

describe("fractions problems factory test suit", () => {
  it("should return array", () => {
    // route: should be /rithmetica/arithmetic,
    // name: should be problem type with /rithmetica/arithmetic route,
    // operation: shold be operations,
    // numberOfOperands = 2,
    // quantity: number,
    // missing = arithmeticMissing.result as TArithmeticMissing,
    // section?: should be undefined - for compatibility purposes

    const result = fractionsProblemsFactory(
      routes.fractions,
      "1-digit same denominator simple fractions",
      operations.addition,
      2,
      1,
      undefined,
      sections.fractions
    );

    expect(Array.isArray(result)).toBeTruthy();
  });

  // function returning value is an array of arrays
  it("should return array containing nested arrays", () => {
    const result = fractionsProblemsFactory(
      routes.fractions,
      "1-digit same denominator simple fractions",
      operations.addition,
      2,
      1,
      undefined,
      sections.fractions
    );

    const singleProblem = result[0];
    expect(Array.isArray(singleProblem)).toBeTruthy();
  });

  it("should return array with the length equals quantity (5th) parameter passed", () => {
    const problemsAmount = 5;
    const result = fractionsProblemsFactory(
      routes.fractions,
      "1-digit same denominator simple fractions",
      operations.addition,
      2,
      problemsAmount,
      undefined,
      sections.fractions
    );

    expect(result.length).toEqual(problemsAmount);
  });

  it("should return array containing nested array of length of 9 in case of 'arithmetic' route", () => {
    const result = fractionsProblemsFactory(
      routes.fractions,
      "1-digit same denominator simple fractions",
      operations.addition,
      2,
      1,
      undefined,
      sections.fractions
    );

    const singleProblem = result[0];
    expect(singleProblem.length).toEqual(9);
  });

  it("should return empty array when the 'name' parameter (2nd) is NOT a defined problem type", () => {
    const testName = "lksjlsdkf";

    const result = fractionsProblemsFactory(
      routes.fractions,
      testName,
      operations.addition,
      2,
      1,
      undefined,
      sections.fractions
    );

    expect(result.length).toEqual(0);
  });
});
