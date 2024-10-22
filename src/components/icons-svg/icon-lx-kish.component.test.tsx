import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import IconLxKish from "./icon-lx-kish.component";

describe("icon lx-kish test suit", () => {
  it("should contain an element with 'lx-kish' data-icon attribute", () => {
    const testClassName = "testClassName";
    const { container } = render(<IconLxKish className={testClassName} />);
    const svgEl = container.querySelector(
      "[data-icon='lx-kish']"
    ) as HTMLImageElement;

    expect(svgEl).toBeInTheDocument();
  });

  it("should contain an element with defined css class", () => {
    const testClassName = "testClassName";
    const { container } = render(<IconLxKish className={testClassName} />);
    const svgEl = container.querySelector(
      "[data-icon='lx-kish']"
    ) as HTMLImageElement;

    expect(svgEl.classList.toString()).toContain(testClassName);
  });
});
