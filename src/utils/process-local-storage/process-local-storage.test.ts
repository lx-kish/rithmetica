import { render, screen } from "@testing-library/react";
import { getStorage } from "./process-local-storage";
import { vi } from "vitest";

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

beforeEach(() => {
  Object.defineProperty(window, "localStorage", { value: localStorageMock });
});

afterEach(() => {
  vi.clearAllMocks();
});

describe("getStorage", () => {
  test("should set item in localStorage", () => {
    const storage = getStorage();
    storage?.setItem("testKey", "testValue");

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "testKey",
      "testValue"
    );
  });

  test("should set object item in localStorage", () => {
    const storage = getStorage();
    const objValue = { key: "value" };
    storage?.setItem("testKey", objValue);

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "testKey",
      JSON.stringify(objValue)
    );
  });

  test("should get item from localStorage", () => {
    localStorageMock.getItem.mockReturnValueOnce("testValue");
    const storage = getStorage();
    const result = storage?.getItem("testKey", false);

    expect(localStorageMock.getItem).toHaveBeenCalledWith("testKey");
    expect(result).toBe("testValue");
  });

  test("should get object item from localStorage", () => {
    const objValue = { key: "value" };
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(objValue));
    const storage = getStorage();
    const result = storage?.getItem("testKey", true);

    expect(localStorageMock.getItem).toHaveBeenCalledWith("testKey");
    expect(result).toEqual(objValue);
  });

  test("should remove item from localStorage", () => {
    const storage = getStorage();
    storage?.removeItem("testKey");

    expect(localStorageMock.removeItem).toHaveBeenCalledWith("testKey");
  });
});
