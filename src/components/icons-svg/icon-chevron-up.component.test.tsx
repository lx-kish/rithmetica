import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import IconChevronUp from "./icon-chevron-up.component";

describe("icon chevron up test suit", () => {
  it("should contain an element with 'chevron-up' data-icon attribute", () => {
    const testClassName = "testClassName";
    const { container } = render(<IconChevronUp className={testClassName} />);
    const svgEl = container.querySelector(
      "[data-icon='chevron-up']"
    ) as HTMLImageElement;

    expect(svgEl).toBeInTheDocument();
  });

  it("should contain an element with defined css class", () => {
    const testClassName = "testClassName";
    const { container } = render(<IconChevronUp className={testClassName} />);
    const svgEl = container.querySelector(
      "[data-icon='chevron-up']"
    ) as HTMLImageElement;

    expect(svgEl.classList.toString()).toContain(testClassName);
  });
});
