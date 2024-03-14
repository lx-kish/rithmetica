import React, { ReactElement } from "react";

import Header from "../../components/views/headers/multiplication-tab/header.component";
import Footer from "../../components/views/footer/footer.component";
import Tab from "../../components/views/multiplication-tab/table/tab.component";

import NavigationBar from "../../components/views/navigation/navigation-bar/navigation-bar.component";

function MultiplicationTab(): ReactElement {
  return (
    <>
      <NavigationBar />
      <main className="main">
        <Header />
        <Tab />
      </main>
      <Footer />
    </>
  );
}

export default MultiplicationTab;
