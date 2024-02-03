import getGreatestCommonDivisor from "./get-greatest-common-divisor";

describe("getGreatestCommonDivisor", () => {
  it("should return the correct greatest common divisor when both numbers are positive", () => {
    const result = getGreatestCommonDivisor(12, 18);
    expect(result).toBe(6);
  });

  it("should return the correct greatest common divisor when one number is negative", () => {
    const result = getGreatestCommonDivisor(-24, 36);
    expect(result).toBe(12);
  });

  it("should throw an error for invalid input", () => {
    expect(() => getGreatestCommonDivisor("a" as any, 5)).toThrowError();
  });

  //   it("should throw an error when an error occurs during calculation", () => {
  //     // Mocking the recursive call to simulate an error
  //     jest.spyOn(console, "error").mockImplementationOnce(() => {});
  //     console.log(getGreatestCommonDivisor(15, 0));
  //     expect(() => getGreatestCommonDivisor(15, 0)).toThrowError();
  //   });
});
