import getInputPosition from "./get-input-position";
import { arithmeticMissing } from "../../../../TS/constatnts/constants";

describe("getInputPosition test suit", () => {
  it("should return 0 in case of second parameter is 'first'", () => {
    const result = getInputPosition(2, "first");
    expect(result).toBe(0);
  });

  it("should return firstParameter-1 in case of second parameter is 'last'", () => {
    const firstParam = 10;
    const result = getInputPosition(firstParam, "last");
    expect(result).toBe(firstParam - 1);
  });

  it("should return firstParameter in case of second parameter is 'result'", () => {
    const firstParam = 10;
    const result = getInputPosition(firstParam, "result");
    expect(result).toBe(firstParam);
  });

  it("should return a number greater than or equal 0 in case of second parameter is 'random'", () => {
    const firstParam = 2;
    const result = getInputPosition(firstParam, "random");
    expect(result).toBeGreaterThanOrEqual(0);
  });

  it("should return a number less than or equal first parameter in case of second parameter is 'random'", () => {
    const firstParam = 2;
    const result = getInputPosition(firstParam, "random");
    expect(result).toBeLessThanOrEqual(firstParam);
  });

  it("should return undefined in case of the second parameter is an empty string", () => {
    const firstParam = 2;
    const result = getInputPosition(firstParam, "");
    expect(result).toEqual(undefined);
  });

  it("should return undefined in case of the second parameter is a random string", () => {
    const firstParam = 2;
    const result = getInputPosition(firstParam, "owieflskdvls");
    expect(result).toEqual(undefined);
  });
});
