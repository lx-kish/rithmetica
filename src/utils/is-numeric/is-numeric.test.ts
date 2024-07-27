import isNumeric from "./is-numeric";

describe("isNumeric function", () => {
  it("should return true for a non-negative integer", () => {
    expect(isNumeric(42)).toBe(true);
  });

  it("should return true for a negative integer", () => {
    expect(isNumeric(-42)).toBe(true);
  });

  it("should return true for a non-negative floating values", () => {
    expect(isNumeric(123.45)).toBe(true);
  });

  it("should return true for a negative floating values", () => {
    expect(isNumeric(-123.45)).toBe(true);
  });

  it("should return true for zero", () => {
    expect(isNumeric(0)).toBe(true);
  });

  it("should return true for a long non-negative integer", () => {
    expect(isNumeric(123456789123456789)).toBe(true);
  });

  it("should return true for a long negative integer", () => {
    expect(isNumeric(-123456789123456789)).toBe(true);
  });

  it("should return true for a long non-negative floating values", () => {
    expect(isNumeric(123456789123456789.123456789123456789)).toBe(true);
  });

  it("should return true for a long negative floating values", () => {
    expect(isNumeric(-123456789123456789.123456789123456789)).toBe(true);
  });

  it("should return true for a string containing a non-negative integer", () => {
    expect(isNumeric("123")).toBe(true);
  });

  it("should return true for a string containing a negative integer", () => {
    expect(isNumeric("-123")).toBe(true);
  });

  it("should return true for a string containing zero", () => {
    expect(isNumeric("0")).toBe(true);
  });

  it("should return false for a letter", () => {
    expect(isNumeric("b")).toBe(false);
  });

  it("should return false for a sequence of letters", () => {
    expect(isNumeric("abc")).toBe(false);
  });

  it("should return false for a number, following by a letter", () => {
    expect(isNumeric("1a")).toBe(false);
  });

  it("should return false for a letter, following by a number", () => {
    expect(isNumeric("a1")).toBe(false);
  });

  it("should return false for true boolean value", () => {
    expect(isNumeric(true)).toBe(false);
  });

  it("should return false for false boolean value", () => {
    expect(isNumeric(false)).toBe(false);
  });

  it("should return false for null value", () => {
    expect(isNumeric(null)).toBe(false);
  });

  it("should return false for undefined value", () => {
    expect(isNumeric(undefined)).toBe(false);
  });

  it("should return false for NaN value", () => {
    expect(isNumeric(NaN)).toBe(false);
  });

  it("should return false for an object value", () => {
    expect(isNumeric({})).toBe(false);
  });

  it("should return false for an array value", () => {
    expect(isNumeric([])).toBe(false);
  });

  it("should return false for an empty string", () => {
    expect(isNumeric("")).toBe(false);
  });

  it("should return false for sequence of spaces", () => {
    expect(isNumeric("   ")).toBe(false);
  });

  it("should return false for a sequence of numeric symbols non-convertable to a valid number", () => {
    expect(isNumeric("12.34.56")).toBe(false);
  });
});
