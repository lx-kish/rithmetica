import React from "react";
import { vi } from "vitest";
import handleKeyDown from "./handle-key-down-event";

describe("handleKeyDown function", () => {
  it("should prevent default for arrow up key", () => {
    const event = {
      keyCode: 38,
      preventDefault: vi.fn(),
      currentTarget: {
        value: "",
        max: "",
        getAttribute: vi.fn(),
      },
    };
    handleKeyDown(event as unknown as React.KeyboardEvent<HTMLInputElement>);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it("should prevent default for arrow down key", () => {
    const event = {
      keyCode: 40,
      preventDefault: vi.fn(),
      currentTarget: {
        value: "",
        max: "",
        getAttribute: vi.fn(),
      },
    };
    handleKeyDown(event as unknown as React.KeyboardEvent<HTMLInputElement>);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it("should not prevent default for allowed keys", () => {
    const allowedKeys = [8, 46, 9, 37, 39];
    allowedKeys.forEach((keyCode) => {
      const event = {
        keyCode,
        preventDefault: vi.fn(),
        currentTarget: {
          value: "",
          max: "",
          getAttribute: vi.fn(),
        },
      };
      handleKeyDown(event as unknown as React.KeyboardEvent<HTMLInputElement>);
      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });

  it("should prevent default for keys exceeding max length", () => {
    const event = {
      keyCode: 65, // Some random key code
      preventDefault: vi.fn(),
      currentTarget: {
        value: "123", // Assuming max length is 3
        max: "3",
        getAttribute: vi.fn(),
      },
    };
    handleKeyDown(event as unknown as React.KeyboardEvent<HTMLInputElement>);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it("should prevent default for non-numeric keys", () => {
    const event = {
      keyCode: 65, // Some random key code
      key: "a",
      preventDefault: vi.fn(),
      currentTarget: {
        value: "",
        max: "",
        getAttribute: vi.fn(),
      },
    };
    handleKeyDown(event as unknown as React.KeyboardEvent<HTMLInputElement>);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it("should not prevent default for numeric keys", () => {
    const event = {
      keyCode: 49, // Key code for '1'
      key: "1",
      preventDefault: vi.fn(),
      currentTarget: {
        value: "",
        max: "1",
        getAttribute: vi.fn(),
      },
    };
    handleKeyDown(event as unknown as React.KeyboardEvent<HTMLInputElement>);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
