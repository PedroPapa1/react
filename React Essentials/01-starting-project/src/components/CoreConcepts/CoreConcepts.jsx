import { CORE_CONCEPTS } from "../../data";
import "./CoreConcept.css";

function renderCoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>{CORE_CONCEPTS.map((concept) => renderCoreConcept({ ...concept }))}</ul>
    </section>
  );
}
