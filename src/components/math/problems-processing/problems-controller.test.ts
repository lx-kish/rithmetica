import { cleanup } from "@testing-library/react";

import problemsController from "./problems-controller";
import { ISettings } from "../../../TS/interfaces/interfaces";

const mockedSettings1 = {
  colPerRow: 2,
  id: "b3338f2c17a0a",
  missing: "random",
  name: "two-digit tidying up",
  numberOfOperands: 2,
  operation: "+",
  page: "/rithmetica/arithmetic",
  quantity: 5,
} as ISettings;

const mockedSettings2 = {
  colPerRow: 2,
  id: "f6ef55c50daef",
  name: "2-digit decimals",
  numberOfOperands: 2,
  operation: "-",
  page: "/rithmetica/fractions",
  quantity: 3,
  section: ".1",
  type: "",
} as ISettings;

const mockedSettings3 = {
  colPerRow: 1,
  id: "281e3f8538eb9",
  name: "1-digit different denominators improper fractions",
  numberOfOperands: 2,
  operation: "+",
  page: "/rithmetica/fractions",
  quantity: 3,
  section: "½",
  type: "",
} as ISettings;

describe("Problems controller test suit", () => {
  afterEach(cleanup);

  // function returning value is an array
  it("should return array", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    expect(Array.isArray(problemsSet)).toBeTruthy();
    // expect(problemsSet instanceof Array).toBeTruthy();
    // expect(typeof problemsSet).toBe("object");
  });

  // function returning value is an array of arrays
  it("should return array containing nested arrays", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    expect(Array.isArray(singleProblem)).toBeTruthy();
    // expect(singleProblem instanceof Array).toBeTruthy();
  });

  // internal array should contain object with "type" attribute
  it("should return array containing nested array of objects, and one of the objects has attribute 'type' with value 'type'", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const typeObject = singleProblem.find((attr) => attr.type === "type");

    const isObject =
      typeObject &&
      typeof typeObject === "object" &&
      !Array.isArray(typeObject);

    expect(isObject).toBeTruthy();
  });

  // internal array should contain object with "type" attribute where route attribute is equal page attribute in settings object
  it("should return array containing nested array of objects, and one of the objects has attribute 'type' with value 'type', and attribute 'route' with the same value as attribute 'page' of the setting object", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const typeObject = singleProblem.find((attr) => attr.type === "type");

    expect(typeObject?.route).toEqual(mockedSetting.page);
  });

  // internal array should contain object with "type" attribute where name attribute is equal name attribute in settings object
  it("should return array containing nested array of objects, and one of the objects has attribute 'type' with value 'type', and attribute 'name' with the same value as attribute 'name' of the setting object", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const typeObject = singleProblem.find((attr) => attr.type === "type");

    expect(typeObject?.name).toEqual(mockedSetting.name);
  });

  // internal array should contain object with "type" attribute where name attribute is equal name attribute in settings object
  it("should return array containing nested array of objects, and one of the objects has attribute 'type' with value 'type', and attribute 'operation' with the same value as attribute 'operation' of the setting object", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const typeObject = singleProblem.find((attr) => attr.type === "type");

    expect(typeObject?.operation).toEqual(mockedSetting.operation);
  });

  // internal array should contain object with "type" attribute where section attribute is equal section attribute in settings object
  it("should return array containing nested array of objects, and one of the objects has attribute 'type' with value 'type', and attribute 'section' with the same value as attribute 'section' of the setting object", () => {
    const mockedSetting = {
      colPerRow: 1,
      id: "281e3f8538eb9",
      name: "1-digit different denominators improper fractions",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/fractions",
      quantity: 1,
      section: "½",
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const typeObject = singleProblem.find((attr) => attr.type === "type");

    expect(typeObject?.section).toEqual(mockedSetting.section);
  });

  // returned array should contain as many arrays, as quantity attribute in settings object
  it("should return array containing as many nested array of objects, as attribute 'quantity' of the setting object", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 3,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    expect(problemsSet.length).toEqual(mockedSetting.quantity);
  });

  // internal array should contain object with "type" attribute with value "operand" if the page attribute in settings object is equal "/rithmetica/arithmetic"
  it("should return array containing nested array of objects, and one of the objects has attribute 'type' with value 'operand' if attribute 'page' of the setting object is equal '/rithmetica/arithmetic'", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const operandObject = singleProblem.find((attr) => attr.type === "operand");

    const isObject =
      operandObject &&
      typeof operandObject === "object" &&
      !Array.isArray(operandObject);

    expect(isObject).toBeTruthy();
  });

  // internal array should contain 2 objects with "type" attribute with value "operand" if the page attribute in settings object is equal "/rithmetica/arithmetic"
  it("should return array containing nested array of objects, and the number of the objects has attribute 'type' with value 'operand' is 2, if attribute 'page' of the setting object is equal '/rithmetica/arithmetic'", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const operandObjects = singleProblem.filter(
      (attr) => attr.type === "operand"
    );

    expect(operandObjects.length).toEqual(2);
  });

  // internal array should contain object with "type" attribute with value "sign" if the page attribute in settings object is equal "/rithmetica/arithmetic"
  it("should return array containing nested array of objects, and one of the objects has attribute 'type' with value 'sign' if attribute 'page' of the setting object is equal '/rithmetica/arithmetic'", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const signObject = singleProblem.find((attr) => attr.type === "sign");

    const isObject =
      signObject &&
      typeof signObject === "object" &&
      !Array.isArray(signObject);

    expect(isObject).toBeTruthy();
  });

  // internal array should contain 2 objects with "type" attribute with value "sign" if the page attribute in settings object is equal "/rithmetica/arithmetic"
  it("should return array containing nested array of objects, and the number of the objects has attribute 'type' with value 'sign' is 2, if attribute 'page' of the setting object is equal '/rithmetica/arithmetic'", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const signObject = singleProblem.filter((attr) => attr.type === "sign");

    expect(signObject.length).toEqual(2);
  });

  // internal array should contain object with "type" attribute with value "input" if the page attribute in settings object is equal "/rithmetica/arithmetic"
  it("should return array containing nested array of objects, and one of the objects has attribute 'type' with value 'input' if attribute 'page' of the setting object is equal '/rithmetica/arithmetic'", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const inputObject = singleProblem.find((attr) => attr.type === "input");

    const isObject =
      inputObject &&
      typeof inputObject === "object" &&
      !Array.isArray(inputObject);

    expect(isObject).toBeTruthy();
  });

  // internal array should contain 2 objects with "type" attribute with value "input" if the page attribute in settings object is equal "/rithmetica/arithmetic"
  it("should return array containing nested array of objects, and the number of the objects has attribute 'type' with value 'input' is 1, if attribute 'page' of the setting object is equal '/rithmetica/arithmetic'", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const inputObject = singleProblem.filter((attr) => attr.type === "input");

    expect(inputObject.length).toEqual(1);
  });

  // internal array should contain object with "type" attribute with value "result" if the page attribute in settings object is equal "/rithmetica/arithmetic"
  it("should return array containing nested array of objects, and one of the objects has attribute 'type' with value 'result' if attribute 'page' of the setting object is equal '/rithmetica/arithmetic'", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const resultObject = singleProblem.find((attr) => attr.type === "result");

    const isObject =
      resultObject &&
      typeof resultObject === "object" &&
      !Array.isArray(resultObject);

    expect(isObject).toBeTruthy();
  });

  // internal array should contain 2 objects with "type" attribute with value "result" if the page attribute in settings object is equal "/rithmetica/arithmetic"
  it("should return array containing nested array of objects, and the number of the objects has attribute 'type' with value 'result' is 1, if attribute 'page' of the setting object is equal '/rithmetica/arithmetic'", () => {
    const mockedSetting = {
      colPerRow: 2,
      id: "b3338f2c17a0a",
      missing: "random",
      name: "two-digit tidying up",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/arithmetic",
      quantity: 1,
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const resultObject = singleProblem.filter((attr) => attr.type === "result");

    expect(resultObject.length).toEqual(1);
  });

  // internal array should contain object with "type" attribute with value "fraction" if the page attribute in settings object is equal "/rithmetica/fractions"
  it("should return array containing nested array of objects, and one of the objects has attribute 'type' with value 'fraction' if attribute 'page' of the setting object is equal '/rithmetica/fractions'", () => {
    const mockedSetting = {
      colPerRow: 1,
      id: "281e3f8538eb9",
      name: "1-digit different denominators improper fractions",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/fractions",
      quantity: 1,
      section: "½",
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const fractionObject = singleProblem.find(
      (attr) => attr.type === "fraction"
    );

    const isObject =
      fractionObject &&
      typeof fractionObject === "object" &&
      !Array.isArray(fractionObject);

    expect(isObject).toBeTruthy();
  });

  // internal array should contain 2 objects with "type" attribute with value "fraction" if the page attribute in settings object is equal "/rithmetica/fractions"
  it("should return array containing nested array of objects, and one of the objects has 2 attribute 'type' with value 'fraction' if attribute 'page' of the setting object is equal '/rithmetica/fractions'", () => {
    const mockedSetting = {
      colPerRow: 1,
      id: "281e3f8538eb9",
      name: "1-digit different denominators improper fractions",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/fractions",
      quantity: 1,
      section: "½",
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    const singleProblem = problemsSet[0];

    const fractionObjects = singleProblem.filter(
      (attr) => attr.type === "fraction"
    );

    expect(fractionObjects.length).toEqual(2);
  });

  // returns empty array when the name is not from the problemTypes array
  it("should return empty array in case of passing setting object which is not in a problemTypes array", () => {
    const mockedSetting = {
      colPerRow: 1,
      id: "281e3f8538eb9",
      name: "some random name",
      numberOfOperands: 2,
      operation: "+",
      page: "/rithmetica/fractions",
      quantity: 1,
      section: "½",
    } as ISettings;

    const problemsSet = problemsController(mockedSetting);

    expect(problemsSet.length).toEqual(0);
  });
});
