import { Header } from "./components/Header";
import { Quiz } from "./components/Quiz";
import { QuizProvider } from "./components/QuizProvider";

function App() {
  return (
    <>
      <Header />
      <main>
        <QuizProvider>
          <Quiz />
        </QuizProvider>
      </main>
    </>
  );
}

export default App;
