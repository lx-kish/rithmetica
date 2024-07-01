// import getNodeOffsetTop from "./get-node-offset-top";

// describe("getNodeOffsetTop", () => {
//   it("returns -1 for non-existing node", () => {
//     // Arrange
//     const nonExistingNode = document.createElement("div");

//     // Act
//     const offsetTop = getNodeOffsetTop(nonExistingNode);

//     // Assert
//     expect(offsetTop).toBe(-1);
//   });

//   it("returns offsetTop for an existing node", () => {
//     // Arrange
//     const existingNode = document.createElement("div");
//     // existingNode.style["marginTop"] = "50px";
//     // existingNode.style.marginTop = "50px";
//     // existingNode.setAttribute("id", "Div1");

//     // for details see https://github.com/testing-library/react-testing-library/issues/353#issuecomment-545231016
//     Object.defineProperty(existingNode, "offsetTop", {
//       configurable: true,
//       value: 50,
//     });
//     document.body.appendChild(existingNode);

//     // Act
//     const offsetTop = getNodeOffsetTop(existingNode);

//     // Assert
//     expect(offsetTop).toBe(50);

//     // Cleanup
//     document.body.removeChild(existingNode);
//   });
// });
