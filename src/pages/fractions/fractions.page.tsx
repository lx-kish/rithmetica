import React, { ReactElement } from "react";

import NavigationBar from "../../components/views/navigation/navigation-bar/navigation-bar.component";
import Header from "../../components/views/header/header.component";
import FractionsHeaderContent from "../../components/views/header/fractions/fractions.header.content";
import Problems from "../../components/views/fractions/problems/problems.component";
import BtnUp from "../../components/views/btn-up/btn-up.component";
import Footer from "../../components/views/footer/footer.component";

import useRenderScrollUpBtn from "../../hooks/use-render-scroll-up-btn/use-render-scroll-up-btn";

import { routes } from "../../TS/constatnts/constants";

function Fractions(): ReactElement {
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
        <Header pageName={routes.fractions}>
          <FractionsHeaderContent pageName={routes.fractions} />
        </Header>
        <Problems />
        {renderScrollUpBtn && <BtnUp />}
      </main>
      <Footer />
    </>
  );
}

export default Fractions;
