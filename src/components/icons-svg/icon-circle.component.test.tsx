import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import IconCircle from "./icon-circle.component";

describe("icon circle test suit", () => {
  it("should contain an element with 'circle' data-icon attribute", () => {
    const testClassName = "testClassName";
    const { container } = render(<IconCircle className={testClassName} />);
    const svgEl = container.querySelector(
      "[data-icon='circle']"
    ) as HTMLImageElement;

    expect(svgEl).toBeInTheDocument();
  });

  it("should contain an element with defined css class", () => {
    const testClassName = "testClassName";
    const { container } = render(<IconCircle className={testClassName} />);
    const svgEl = container.querySelector(
      "[data-icon='circle']"
    ) as HTMLImageElement;

    expect(svgEl.classList.toString()).toContain(testClassName);
  });
});
