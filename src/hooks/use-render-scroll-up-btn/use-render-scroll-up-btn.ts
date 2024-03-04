import React from "react";

export default function useRenderScrollUpBtn() {
  const [renderUpBtn, setRenderUpBtn] = React.useState(false);

  /**
   * React hook useEffect for rendering up button on scrolling
   */
  React.useEffect(() => {
    const scrollCallBack: any = window.addEventListener("scroll", () => {
      const scrolledDown = window.pageYOffset >= 50;

      if (scrolledDown) setRenderUpBtn(true);
      if (!scrolledDown) setRenderUpBtn(false);
    });

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return renderUpBtn;
}
