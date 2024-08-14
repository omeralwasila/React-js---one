import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header.jsx";
import CoreConcepts from "./Components/CoreConcept.jsx";
import TabButton from "./Components/TabButton.jsx";
import { EXAMPLES } from "./data";

function App() {
  const [selectTopic, setSelectTopic] = useState("components");

  function handelSelect(selectButton) {
    setSelectTopic(selectButton);
    console.log(selectTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((Item) => (
              <CoreConcepts key={Item.title} {...Item} />
            ))}
          </ul>
        </section>
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
          <div id="tab-content">
            <h3>{EXAMPLES[selectTopic].title}</h3>
            <p>{EXAMPLES[selectTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
