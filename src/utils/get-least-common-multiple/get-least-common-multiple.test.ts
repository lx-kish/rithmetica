import { vi } from "vitest";
import getLeastCommonMultiple from "./get-least-common-multiple";

describe("getLeastCommonMultiple", () => {
  it("should return the correct least common multiple when both arguments are non-negative integers", () => {
    const result = getLeastCommonMultiple(6, 9);

    expect(result).toEqual(18);
  });

  it("should return the correct least common multiple when both arguments are non-negative integers, and one of them is a least common multiple for both", () => {
    const result = getLeastCommonMultiple(2, 8);

    expect(result).toEqual(8);
  });

  it("should return the correct least common multiple when the first argument is an integer and the second is non-negative integer", () => {
    const result = getLeastCommonMultiple(-6, 9);
    expect(result).toBe(18);
  });

  it("should return the correct least common multiple when the first argument is non-negative integer and the second is an integer", () => {
    const result = getLeastCommonMultiple(6, -9);
    expect(result).toBe(18);
  });

  it("should return the correct least common multiple when both arguments are integers", () => {
    const result = getLeastCommonMultiple(-6, -9);
    expect(result).toBe(18);
  });

  it("should return 1 when two numbers are relatively prime (don't have othe divisors than 1)", () => {
    const result = getLeastCommonMultiple(7, 3);
    expect(result).toBe(21);
  });

  it("should return the second argument when the first argument is 0 and the second argument is a non-negative integer)", () => {
    const result = getLeastCommonMultiple(0, 10);
    expect(result).toBe(0);
  });

  it("should return the second argument when the first argument is 0 and the second argument is an integer)", () => {
    const result = getLeastCommonMultiple(0, -10);
    expect(result).toBe(0);
  });

  it("should return the first argument when the first argument is a non-negative integer and the second argument is 0)", () => {
    const result = getLeastCommonMultiple(10, 0);
    expect(result).toBe(0);
  });

  it("should return the first argument when the first argument is an integer and the second argument is 0)", () => {
    const result = getLeastCommonMultiple(-10, 0);
    expect(result).toBe(0);
  });

  it("should throw an error for non-numeric first input argument", () => {
    expect(() => getLeastCommonMultiple("a" as any, 5)).toThrow();
  });

  it("should throw an error for non-numeric second input argument", () => {
    expect(() => getLeastCommonMultiple(5, "a" as any)).toThrow();
  });

  it("should throw an error for non-numeric both input arguments", () => {
    expect(() => getLeastCommonMultiple("a" as any, "a" as any)).toThrow();
  });
});
