import getNodeOffsetTop from "./get-node-offset-top";

describe("getNodeOffsetTop", () => {
  it("returns -1 for non-existing node", () => {
    const nonExistingNode = document.createElement("div");

    const offsetTop = getNodeOffsetTop(nonExistingNode);

    expect(offsetTop).toBe(-1);
  });

  it("returns offsetTop for an existing node", () => {
    const existingNode = document.createElement("div");

    // for details see https://github.com/testing-library/react-testing-library/issues/353#issuecomment-545231016
    Object.defineProperty(existingNode, "offsetTop", {
      configurable: true,
      value: 50,
    });
    document.body.appendChild(existingNode);

    const offsetTop = getNodeOffsetTop(existingNode);

    expect(offsetTop).toBe(50);

    document.body.removeChild(existingNode);
  });
});
