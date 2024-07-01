// import { act, renderHook } from "@testing-library/react";
// import useWindowSize from "./use-window-size"; // Adjust the import path as needed

// jest.useFakeTimers();

// describe("useWindowSize", () => {
//   let resizeEventListeners: any[] = [];

//   beforeEach(() => {
//     resizeEventListeners = [];
//     // Mock window.innerWidth and window.innerHeight
//     Object.defineProperty(window, "innerWidth", {
//       writable: true,
//       value: 1024,
//     });
//     Object.defineProperty(window, "innerHeight", {
//       writable: true,
//       value: 768,
//     });
//     // Mock addEventListener and removeEventListener
//     window.addEventListener = jest.fn((event, cb) => {
//       if (event === "resize") {
//         resizeEventListeners.push(cb);
//       }
//     });
//     window.removeEventListener = jest.fn((event, cb) => {
//       if (event === "resize") {
//         const index = resizeEventListeners.indexOf(cb);
//         if (index !== -1) {
//           resizeEventListeners.splice(index, 1);
//         }
//       }
//     });
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should return initial window size", () => {
//     const { result } = renderHook(() => useWindowSize());
//     expect(result.current).toEqual([1024, 768]);
//   });

//   it("should update window size on resize", () => {
//     const { result } = renderHook(() => useWindowSize());
//     expect(result.current).toEqual([1024, 768]);

//     act(() => {
//       Object.defineProperty(window, "innerWidth", {
//         writable: true,
//         value: 800,
//       });
//       Object.defineProperty(window, "innerHeight", {
//         writable: true,
//         value: 600,
//       });
//       resizeEventListeners.forEach((cb) => cb());
//     });

//     expect(result.current).toEqual([800, 600]);
//   });
// });
