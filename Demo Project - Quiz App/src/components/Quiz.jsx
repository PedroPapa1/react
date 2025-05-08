import { Question } from "./Question.jsx";
import { Summary } from "./Summary.jsx";
import { useQuizContext } from "./QuizContext";

export function Quiz() {
  const { currentQuestion, questions, userAnswers } = useQuizContext();

  if (questions.length === userAnswers.length) {
    return <Summary />;
  }

  return (
    <div id="quiz">
      <Question key={currentQuestion.id} />
    </div>
  );
}
