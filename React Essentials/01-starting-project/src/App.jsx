import { Header } from "./components/Header/Header.jsx";
import { CoreConcepts } from "./components/CoreConcepts/CoreConcepts.jsx";
import { ReactExamples } from "./components/ReactExamples/ReactExamples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <ReactExamples />
      </main>
    </>
  );
}

export default App;
