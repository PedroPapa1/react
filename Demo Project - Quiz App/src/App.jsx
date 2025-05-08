import { Header } from "./components/Header";
import { Quiz } from "./components/Quiz";
import { QuizProvider } from "./components/QuizContext";
import questions from "./questions";

function App() {
  return (
    <>
      <Header />
      <main>
        <QuizProvider questions={questions}>
          <Quiz />
        </QuizProvider>
      </main>
    </>
  );
}

export default App;
