import { cleanup } from "@testing-library/react";

import getRandomIntegerInARange from "./get-random-integer-in-a-range";

describe("Get random integer in a range function test suit", () => {
  afterEach(cleanup);

  // function returns a number within a specified range
  it("should return number greater or equal than minimum passed for the non-negative range within 1 and 5", () => {
    const value = getRandomIntegerInARange(1, 5);

    expect(value).toBeGreaterThan(0);
  });

  // function returns a number within a specified range
  it("should return number greater or equal than minimum passed for the non-negative range within 4 and 5", () => {
    const value = getRandomIntegerInARange(4, 5);

    expect(value).toBeGreaterThan(3);
  });

  // function returns a number within a specified range
  it("should return number greater or equal than minimum passed for the non-negative range within 5 and 5", () => {
    const value = getRandomIntegerInARange(5, 5);

    expect(value).toBeGreaterThan(4);
  });

  it("should return number less or equal than maximum passed for the non-negative range within 1 and 5", () => {
    const value = getRandomIntegerInARange(1, 5);

    expect(value).toBeLessThan(6);
  });

  it("should return number less or equal than maximum passed for the non-negative range within 1 and 2", () => {
    const value = getRandomIntegerInARange(1, 2);

    expect(value).toBeLessThan(3);
  });

  it("should return number less or equal than maximum passed for the non-negative range within 1 and 1", () => {
    const value = getRandomIntegerInARange(1, 1);

    expect(value).toBeLessThan(2);
  });

  it("should return number greater than minimum passed for the negative range within -5 and -1", () => {
    const value = getRandomIntegerInARange(-5, -1);

    expect(value).toBeGreaterThan(-6);
  });

  it("should return number greater or equal than minimum passed for the negative range within -5 and -4", () => {
    const value = getRandomIntegerInARange(-5, -4);

    expect(value).toBeGreaterThan(-6);
  });

  it("should return number greater or equal than minimum passed for the negative range within -5 and -5", () => {
    const value = getRandomIntegerInARange(-5, -5);

    expect(value).toBeGreaterThan(-6);
  });

  it("should return number less or equal than maximum passed for the negative range within -5 and -1", () => {
    const value = getRandomIntegerInARange(-5, -1);

    expect(value).toBeLessThan(0);
  });

  it("should return number less or equal than maximum passed for the negative range within -2 and -1", () => {
    const value = getRandomIntegerInARange(-2, -1);

    expect(value).toBeLessThan(0);
  });

  it("should return number less or equal than maximum passed for the negative range within -2 and -2", () => {
    const value = getRandomIntegerInARange(-2, -2);

    expect(value).toBeLessThan(-1);
  });

  it("should return number greater or equal than minimum passed for the range from negative to positive within -2 and 2", () => {
    const value = getRandomIntegerInARange(-2, 2);

    expect(value).toBeGreaterThan(-3);
  });

  it("should return number greater or equal than minimum passed for the range from negative to positive within -1 and 1", () => {
    const value = getRandomIntegerInARange(-1, 1);

    expect(value).toBeGreaterThan(-2);
  });

  it("should return number less or equal than maximum passed for the range from negative to positive within -2 and 2", () => {
    const value = getRandomIntegerInARange(-2, 2);

    expect(value).toBeLessThan(3);
  });

  it("should return number less or equal than maximum passed for the range from negative to positive within -1 and 1", () => {
    const value = getRandomIntegerInARange(-1, 1);

    expect(value).toBeLessThan(2);
  });

  it("should return number equal 0 range from 0 to 0", () => {
    const value = getRandomIntegerInARange(0, 0);

    expect(value).toEqual(0);
  });

  it("should return -1 when the minimum value of the range passed is a non-numeric string", () => {
    // @ts-ignore
    const value = getRandomIntegerInARange(
      1,
      // @ts-ignore
      "non-numeric value"
    );

    expect(value).toEqual(-1);
  });

  it("should return -1 when the minimum value of the range passed is a non-numeric string", () => {
    // @ts-ignore
    const value = getRandomIntegerInARange(
      // @ts-ignore
      "non-numeric value",
      1
    );

    expect(value).toEqual(-1);
  });

  it("should return -1 when both minimum and maximum values of the range passed are non-numeric strings", () => {
    // @ts-ignore
    const value = getRandomIntegerInARange(
      // @ts-ignore
      "non-numeric value",
      "non-numeric value"
    );

    expect(value).toEqual(-1);
  });
});
