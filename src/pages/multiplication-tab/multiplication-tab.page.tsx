import React from "react";

import Header from "../../components/views/headers/multiplication-tab/header.component";
import Footer from "../../components/views/footer/footer.component";
import Tab from "../../components/views/multiplication-tab/table/tab.component";

import NavigationBar from "../../components/views/navigation/navigation-bar/navigation-bar.component";

import useStickHeaderOnScroll from "../../hooks/use-stick-header-on-scroll/use-stick-header-on-scroll";

const MultiplicationTab: React.FC = () => {
  const { display, getDisplay, setDisplay } = useStickHeaderOnScroll();

  return (
    <>
      <NavigationBar />
      <main className="main">
        <Header
          getDisplay={getDisplay}
          setChecked={() => setDisplay(!display)}
        />
        <Tab />
      </main>
      <Footer />
    </>
  );
};

export default MultiplicationTab;
