import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import IconHeart from "./icon-heart.component";

describe("icon heart test suit", () => {
  it("should contain an element with 'heart' data-icon attribute", () => {
    const testClassName = "testClassName";
    const { container } = render(<IconHeart className={testClassName} />);
    const svgEl = container.querySelector(
      "[data-icon='heart']"
    ) as HTMLImageElement;

    expect(svgEl).toBeInTheDocument();
  });

  it("should contain an element with defined css class", () => {
    const testClassName = "testClassName";
    const { container } = render(<IconHeart className={testClassName} />);
    const svgEl = container.querySelector(
      "[data-icon='heart']"
    ) as HTMLImageElement;

    expect(svgEl.classList.toString()).toContain(testClassName);
  });
});
