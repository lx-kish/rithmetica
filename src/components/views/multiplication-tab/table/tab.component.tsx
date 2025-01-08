import content from "../../../../table.content";

import TabHeader from "../tab-header/tab-header.component";
import TabEmptyLine from "../tab-empty-line/tab-empty-line.component";
import TabLine from "../tab-line/tab-line.component";

function Tab() {
  return (
    <section className="tab" id="tab">
      <TabHeader id={"header-stick"} />
      <TabEmptyLine />
      {[...Array(11)].map(
        (x, i) =>
          i > 1 && <TabLine key={i} className={content.styles[i]} value={i} />
      )}
      <TabHeader id={""} />
    </section>
  );
}

export default Tab;
