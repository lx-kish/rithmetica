import { useEffect, useState } from "react";

function useRenderScrollUpBtn() {
  const [renderUpBtn, setRenderUpBtn] = useState(false);

  useEffect(() => {
    // initial rendering in case page re-renders lower than 50px
    setRenderUpBtn(document.documentElement.scrollTop >= 50);

    const scrollCallBack = () =>
      setRenderUpBtn(document.documentElement.scrollTop >= 50);

    window.addEventListener("scroll", scrollCallBack);

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return renderUpBtn;
}

export default useRenderScrollUpBtn;
