import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton.jsx";

export default function Examples() {
  const [selectTopic, setSelectTopic] = useState("components");

  function handelSelect(selectButton) {
    setSelectTopic(selectButton);
    console.log(selectTopic);
  }
  let tabContent = <p>Please select a Topic</p>;
  if (selectTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectTopic].title}</h3>
        <p>{EXAMPLES[selectTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectTopic === "components"}
          onSelect={() => handelSelect("components")}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={selectTopic === "jsx"}
          onSelect={() => handelSelect("jsx")}
        >
          Jsx
        </TabButton>
        <TabButton
          isSelected={selectTopic === "props"}
          onSelect={() => handelSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectTopic === "state"}
          onSelect={() => handelSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
