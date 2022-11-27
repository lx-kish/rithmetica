import React from "react";

import NavigationBar from "../../components/views/navigation/navigation-bar/navigation-bar.component";
import Header from "../../components/views/headers/arithmetic/header.component";
import Problems from "../../components/views/arithmetic/problems/problems.component";
import BtnUp from "../../components/views/btn-up/btn-up.component";
import Footer from "../../components/views/footer/footer.component";

const Arithmetic: React.FC = () => {
  /**
   * Single state hook useState for all the state properties
   *
   * PROBLEM PARAMETRES:
   * operation: <addition>, <subtraction>
   * missing: <result>, <missingFirst>, <missingLast>, <random>
   * type: <up-to-10>, ...
   * numberOfOperands: <Number>
   * quantity: <Number>
   */
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

  return (
    <>
      <NavigationBar />
      <main className="problem__main main">
        <Header />
        <Problems />
        {renderUpBtn && <BtnUp />}
      </main>
      <Footer />
    </>
  );
};

export default Arithmetic;
