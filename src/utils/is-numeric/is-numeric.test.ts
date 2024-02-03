import "@testing-library/jest-dom/extend-expect";
import isNumeric from "./is-numeric"; // replace with the correct path

describe("isNumeric function", () => {
  test("should return true for numeric values", () => {
    expect(isNumeric(42)).toBe(true);
    expect(isNumeric(-123.45)).toBe(true);
    expect(isNumeric("123")).toBe(true);
    expect(isNumeric("0")).toBe(true);
  });

  test("should return false for non-numeric values", () => {
    expect(isNumeric("abc")).toBe(false);
    expect(isNumeric("1a")).toBe(false);
    expect(isNumeric(null)).toBe(false);
    expect(isNumeric(undefined)).toBe(false);
    expect(isNumeric({})).toBe(false);
    expect(isNumeric([])).toBe(false);
    expect(isNumeric("")).toBe(false);
    expect(isNumeric("   ")).toBe(false);
    expect(isNumeric("12.34.56")).toBe(false);
  });
});
