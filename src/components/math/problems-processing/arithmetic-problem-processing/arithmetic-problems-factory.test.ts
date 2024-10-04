import arithmeticProblemsFactory from "./arithmetic-problems-factory";

import { routes } from "../../../../TS/constatnts/constants";
import { operations } from "../../../../TS/constatnts/constants";
import { arithmeticMissing } from "../../../../TS/constatnts/constants";

describe("arithmetic problems factory test suit", () => {
  it("should return an array", () => {
    const result = arithmeticProblemsFactory(
      routes.arithmetic,
      "single digit operands",
      operations.addition,
      2,
      1,
      arithmeticMissing.result,
      undefined
    );

    expect(Array.isArray(result)).toBeTruthy();
  });

  it("should return array containing nested arrays", () => {
    const result = arithmeticProblemsFactory(
      routes.arithmetic,
      "single digit operands",
      operations.addition,
      2,
      1,
      arithmeticMissing.result,
      undefined
    );

    const singleProblem = result[0];
    expect(Array.isArray(singleProblem)).toBeTruthy();
  });

  it("should return array with the length equals quantity (5th) parameter passed", () => {
    const problemsAmount = 5;
    const result = arithmeticProblemsFactory(
      routes.arithmetic,
      "single digit operands",
      operations.addition,
      2,
      problemsAmount,
      arithmeticMissing.result,
      undefined
    );

    expect(result.length).toEqual(problemsAmount);
  });

  it("should return array containing nested array of length of 7 in case of 'arithmetic' route", () => {
    const result = arithmeticProblemsFactory(
      routes.arithmetic,
      "single digit operands",
      operations.addition,
      2,
      1,
      arithmeticMissing.result,
      undefined
    );

    const singleProblem = result[0];
    expect(singleProblem.length).toEqual(7);
  });

  it("should return empty array when the 'name' parameter (2nd) is NOT a defined problem type", () => {
    const testName = "lksjlsdkf";

    const result = arithmeticProblemsFactory(
      routes.arithmetic,
      testName,
      operations.addition,
      2,
      1,
      arithmeticMissing.result,
      undefined
    );

    expect(result.length).toEqual(0);
  });
});
