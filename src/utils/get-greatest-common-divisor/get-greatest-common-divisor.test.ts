import getGreatestCommonDivisor from "./get-greatest-common-divisor";

describe("getGreatestCommonDivisor", () => {
  it("should return the correct greatest common divisor when both arguments are non-negative integers", () => {
    const result = getGreatestCommonDivisor(12, 18);
    expect(result).toBe(6);
  });

  it("should return the correct greatest common divisor when the first argument is an integer and the second is non-negative integer", () => {
    const result = getGreatestCommonDivisor(-24, 36);
    expect(result).toBe(12);
  });

  it("should return the correct greatest common divisor when the first argument is non-negative integer and the second is an integer", () => {
    const result = getGreatestCommonDivisor(24, -36);
    expect(result).toBe(12);
  });

  it("should return the correct greatest common divisor when both arguments are integers", () => {
    const result = getGreatestCommonDivisor(-24, -36);
    expect(result).toBe(12);
  });

  it("should return 1 when two numbers are relatively prime (don't have othe divisors than 1)", () => {
    const result = getGreatestCommonDivisor(11, 36);
    expect(result).toBe(1);
  });

  it("should return the second argument when the first argument is 0 and the second argument is a non-negative integer)", () => {
    const result = getGreatestCommonDivisor(0, 10);
    expect(result).toBe(10);
  });

  it("should return the second argument when the first argument is 0 and the second argument is an integer)", () => {
    const result = getGreatestCommonDivisor(0, -10);
    expect(result).toBe(10);
  });

  it("should return the first argument when the first argument is a non-negative integer and the second argument is 0)", () => {
    const result = getGreatestCommonDivisor(10, 0);
    expect(result).toBe(10);
  });

  it("should return the first argument when the first argument is an integer and the second argument is 0)", () => {
    const result = getGreatestCommonDivisor(-10, 0);
    expect(result).toBe(10);
  });

  it("should return 0 when both arguments are 0)", () => {
    const result = getGreatestCommonDivisor(0, 0);
    expect(result).toBe(0);
  });

  it("should throw an error for non-numeric first input argument", () => {
    expect(() => getGreatestCommonDivisor("a" as any, 5)).toThrow();
  });

  it("should throw an error for non-numeric second input argument", () => {
    expect(() => getGreatestCommonDivisor(5, "a" as any)).toThrow();
  });

  it("should throw an error for non-numeric both input arguments", () => {
    expect(() => getGreatestCommonDivisor("a" as any, "a" as any)).toThrow();
  });
});
