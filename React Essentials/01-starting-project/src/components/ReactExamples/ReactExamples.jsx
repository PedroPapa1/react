import { useState } from "react";
import { EXAMPLES } from "../../data";
import { EXAMPLES_NAMES } from "../../data";
import { Section } from "../Section/Section";

export function ReactExamples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  function renderNoTopicSelected() {
    return <p>Please select a topic.</p>;
  }

  function renderSelectedTopic() {
    return (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function renderTabButton({ value, label }) {
    return (
      <li>
        <button className={selectedTopic === value ? "active" : undefined} onClick={() => handleSelect(value)}>
          {label}
        </button>
      </li>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <menu>{EXAMPLES_NAMES.map((example) => renderTabButton(example))}</menu>
      {selectedTopic ? renderSelectedTopic() : renderNoTopicSelected()}
    </Section>
  );
}
