import { describe, expect, it, vi } from "vitest";

import debounce from "./debounce";

vi.useFakeTimers();

describe("debounce function tests", () => {
  it("calls debounced function only ones after the timeout specified", () => {
    const testFn = vi.fn();
    const fnCall = debounce(testFn, 2000);

    for (let i = 0; i < 100; i++) {
      fnCall();
    }

    vi.runAllTimers();
    expect(testFn).toBeCalledTimes(1);
  });
});
