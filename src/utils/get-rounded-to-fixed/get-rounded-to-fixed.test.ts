import { describe, expect, it } from "vitest";

import getRoundedToFixed from "./get-rounded-to-fixed";

describe("getRoundedToFixed function tests", () => {
  it("returns 123.6 when value to round passed is 123.55555 and specified decimal place is 1 ", () => {
    const result = getRoundedToFixed(123.55555, 1);

    expect(result).toEqual(123.6);
  });

  it("returns 123.6 when value to round passed is 123.55555 and specified decimal place is -1 ", () => {
    const result = getRoundedToFixed(123.55555, -1);

    expect(result).toEqual(123.6);
  });

  it("returns 0.556 when value to round passed is 0.55555 and specified decimal place is 3", () => {
    const result = getRoundedToFixed(0.55555, 3);

    expect(result).toEqual(0.556);
  });

  it("returns -0.556 when value to round passed is -0.55555 and specified decimal place is 3", () => {
    const result = getRoundedToFixed(-0.55555, 3);

    expect(result).toEqual(-0.556);
  });

  it("returns -0.556 when value to round passed is -0.55555 and specified decimal place is -3", () => {
    const result = getRoundedToFixed(-0.55555, -3);

    expect(result).toEqual(-0.556);
  });

  it("returns 1 when 1 is passed and specified decimal place is 1", () => {
    const result = getRoundedToFixed(1, 1);

    expect(result).toEqual(1);
  });

  it("returns 3 when 3 is passed and specified decimal place is 3", () => {
    const result = getRoundedToFixed(3, 3);

    expect(result).toEqual(3);
  });

  it("throws an error when one of the arguments has not been provided", () => {
    expect(() => getRoundedToFixed(1).toThrow());
  });

  it("throws an error when no arguments has been provided", () => {
    expect(() => getRoundedToFixed()).toThrow();
  });

  it("throws an error when undefined and NaN has been provided as arguments", () => {
    expect(() => getRoundedToFixed("", NaN)).toThrow();
  });
});
