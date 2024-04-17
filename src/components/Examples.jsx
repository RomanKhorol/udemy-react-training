import { useState } from "react";
import Section from "./Section";
import { EXAMPLES } from "../data";
import TabBotton from "./TabButton";
import Tabs from "./Tabs";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(idOfBtn) {
    setSelectedTopic(idOfBtn);
  }
  let tabContent = <p>Plece select the example you want</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabBotton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabBotton>
            <TabBotton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabBotton>
            <TabBotton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabBotton>
            <TabBotton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabBotton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
