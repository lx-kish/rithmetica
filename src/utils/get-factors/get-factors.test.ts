// import getFactors from "./get-factors";

// describe("getFactors function", () => {
//   it("returns an empty array for zero", () => {
//     const factors = getFactors(0);
//     expect(factors).toEqual([]);
//   });

//   it("throws an error for negative values", () => {
//     const factors = getFactors(-5);
//     expect(factors).toEqual([]);
//   });

//   it("returns correct factors for a positive number", () => {
//     const factors = getFactors(12);
//     // Factors of 12 are 1, 2, 3, 4, 6, 12
//     expect(factors).toEqual([1, 2, 3, 4, 6, 12]);
//   });

//   it("returns correct factors for a prime number", () => {
//     const factors = getFactors(13);
//     // Factors of 13 are 1, 13
//     expect(factors).toEqual([1, 13]);
//   });

//   it("handles large positive numbers", () => {
//     const factors = getFactors(999999);
//     // Add your expected factors for a large positive number
//     // You can manually calculate or use an external tool to get the expected factors
//     // For the sake of example, let's assume the factors are [1, 3, 9, 27, ...]
//     expect(factors).toEqual([
//       1, 3, 7, 9, 11, 13, 21, 27, 33, 37, 39, 63, 77, 91, 99, 111, 117, 143,
//       189, 231, 259, 273, 297, 333, 351, 407, 429, 481, 693, 777, 819, 999,
//       1001, 1221, 1287, 1443, 2079, 2331, 2457, 2849, 3003, 3367, 3663, 3861,
//       4329, 5291, 6993, 8547, 9009, 10101, 10989, 12987, 15873, 25641, 27027,
//       30303, 37037, 47619, 76923, 90909, 111111, 142857, 333333, 999999,
//     ]);
//   });

//   it("handles float input by rounding down", () => {
//     const factors = getFactors(7.5);

//     // Factors of 7.5 are the same as factors of 7
//     expect(factors).toEqual([1, 7]);
//   });
// });
