import { act, renderHook } from "@testing-library/react";
import useRenderScrollBtn from "./use-render-scroll-up-btn";

describe("useRenderScrollBtn", () => {
  let addEventListenerSpy: any;
  let removeEventListenerSpy: any;

  beforeEach(() => {
    addEventListenerSpy = jest.spyOn(window, "addEventListener");
    removeEventListenerSpy = jest.spyOn(window, "removeEventListener");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should set renderUpBtn to true when scrolled down", async () => {
    renderHook(() => useRenderScrollBtn());

    // Simulate scrolling down
    await act(async () => {
      window.pageYOffset = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(addEventListenerSpy).toHaveBeenCalled();
    expect(removeEventListenerSpy).not.toHaveBeenCalled();
  });

  it("should set renderUpBtn to false when scrolled up", async () => {
    renderHook(() => useRenderScrollBtn());

    // Simulate scrolling up
    await act(async () => {
      window.pageYOffset = 0;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(addEventListenerSpy).toHaveBeenCalled();
    expect(removeEventListenerSpy).not.toHaveBeenCalled();
  });

  it("should remove event listener when unmounted", async () => {
    const { unmount } = renderHook(() => useRenderScrollBtn());
    unmount();

    expect(addEventListenerSpy).toHaveBeenCalled();
    expect(removeEventListenerSpy).toHaveBeenCalled();
  });
});
