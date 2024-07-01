// import getLeastCommonMultiple from "./get-least-common-multiple";

// // Mock the getGreatestCommonDivisor function
// jest.mock("../get-greatest-common-divisor/get-greatest-common-divisor", () => ({
//   __esModule: true,
//   default: jest.fn(),
// }));

// describe("getLeastCommonMultiple", () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test("renders the least common multiple correctly", () => {
//     // Mock getGreatestCommonDivisor to return a specific value
//     const mockGetGreatestCommonDivisor = jest
//       .spyOn(
//         require("../get-greatest-common-divisor/get-greatest-common-divisor"),
//         "default"
//       )
//       .mockImplementation(() => 3);

//     // Test case with two numeric values
//     const result = getLeastCommonMultiple(6, 9);

//     // Assert that getGreatestCommonDivisor is called with the correct arguments
//     expect(mockGetGreatestCommonDivisor).toHaveBeenCalledWith(6, 9);

//     // Assert that the least common multiple is calculated correctly
//     expect(result).toEqual(18);
//   });

//   test("throws an error for non-numeric values", () => {
//     // Test case with a non-numeric value
//     const nonNumericValue: any = "abc";

//     // Ensure that an error is thrown for non-numeric values
//     expect(() => getLeastCommonMultiple(6, nonNumericValue)).toThrowError(
//       `Found non-numeric value: ${nonNumericValue}`
//     );
//   });
// });
