import React, { ReactElement } from "react";

import NavigationBar from "../../components/views/navigation/navigation-bar/navigation-bar.component";
import Header from "../../components/views/header/header.component";
import ArithmeticHeaderContent from "../../components/views/header/arithmetic/arithmetic.header.content";
import Problems from "../../components/views/arithmetic/problems/problems.component";
import BtnUp from "../../components/views/btn-up/btn-up.component";
import Footer from "../../components/views/footer/footer.component";

import useRenderScrollUpBtn from "../../hooks/use-render-scroll-up-btn/use-render-scroll-up-btn";

function Arithmetic(): ReactElement {
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
  const renderScrollUpBtn = useRenderScrollUpBtn();

  return (
    <>
      <NavigationBar />
      <main className="problem__main main">
        <Header>
          <ArithmeticHeaderContent />
        </Header>
        <Problems />
        {renderScrollUpBtn && <BtnUp />}
      </main>
      <Footer />
    </>
  );
}

export default Arithmetic;
