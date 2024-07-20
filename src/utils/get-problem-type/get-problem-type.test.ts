import { describe, expect, it } from "vitest";

import getProblemTypeBySignature from "./get-problem-type";
import ProblemTypes from "../../components/math/problem-types";
import { TRoutes } from "../../TS/types/types";

const testType = ProblemTypes[0];
const testTypeWithSection = ProblemTypes[20];

describe("debounce executes function", () => {
  it("returns object on existing parameters passed, when section has NOT been provided", () => {
    const returnedType = getProblemTypeBySignature({
      name: testType.name,
      operation: testType.operation,
      route: testType.page as TRoutes,
    });
    expect(
      testType.name === returnedType.name &&
        testType.operation === returnedType.operation &&
        testType.page === returnedType.page &&
        testType.colPerRow === returnedType.colPerRow &&
        testType.missing === returnedType.missing &&
        testType.uiType === returnedType.uiType
    ).toBeTruthy();
  });

  it("returns object on existing parameters passed, when section HAS been provided", () => {
    const returnedType = getProblemTypeBySignature({
      name: testTypeWithSection.name,
      operation: testTypeWithSection.operation,
      route: testTypeWithSection.page as TRoutes,
      section: testTypeWithSection.section,
    });
    expect(
      testTypeWithSection.name === returnedType.name &&
        testTypeWithSection.operation === returnedType.operation &&
        testTypeWithSection.section === returnedType.section &&
        testTypeWithSection.page === returnedType.page &&
        testTypeWithSection.colPerRow === returnedType.colPerRow &&
        testTypeWithSection.missing === returnedType.missing &&
        testTypeWithSection.uiType === returnedType.uiType
    ).toBeTruthy();
  });

  it("returns 'undefined' on falsy parameters passed, when section has NOT been provided", () => {
    const returnedType = getProblemTypeBySignature({
      name: "sdlfkjblsd",
      operation: "lsdkfjs",
      route: "" as TRoutes,
    });

    expect(returnedType).toBeUndefined();
  });

  it("returns 'undefined' on falsy parameters passed, when section HAS been provided", () => {
    const returnedType = getProblemTypeBySignature({
      name: "",
      operation: "",
      route: "" as TRoutes,
      section: "",
    });

    expect(returnedType).toBeUndefined();
  });
});
