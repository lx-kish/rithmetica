import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import IconChevronDown from "./icon-chevron-down.component";

describe("icon chevron down test suit", () => {
  it("should contain an element with 'chevron-down' data-icon attribute", () => {
    const testClassName = "testClassName";
    const { container } = render(<IconChevronDown className={testClassName} />);
    const svgEl = container.querySelector(
      "[data-icon='chevron-down']"
    ) as HTMLImageElement;

    expect(svgEl).toBeInTheDocument();
  });

  it("should contain an element with defined css class", () => {
    const testClassName = "testClassName";
    const { container } = render(<IconChevronDown className={testClassName} />);
    const svgEl = container.querySelector(
      "[data-icon='chevron-down']"
    ) as HTMLImageElement;

    expect(svgEl.classList.toString()).toContain(testClassName);
  });
});
