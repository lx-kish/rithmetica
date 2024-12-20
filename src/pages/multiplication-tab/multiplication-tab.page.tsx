import { ReactElement } from "react";

import Header from "../../components/views/header/header.component";
import MultiplicationTabHeaderContent from "../../components/views/header/multiplication-tab/multiplication-tab.header.content";
import Footer from "../../components/views/footer/footer.component";
import Tab from "../../components/views/multiplication-tab/table/tab.component";
import NavigationBar from "../../components/views/navigation/navigation-bar/navigation-bar.component";

import { routes } from "../../TS/constants/constants";

function MultiplicationTab(): ReactElement {
  return (
    <>
      <NavigationBar />
      <main className="main">
        <Header pageName={routes.multiplicationTab}>
          <MultiplicationTabHeaderContent />
        </Header>
        <Tab />
      </main>
      <Footer />
    </>
  );
}

export default MultiplicationTab;
