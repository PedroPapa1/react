import { useContext } from "react";
import { Question } from "./Question.jsx";
import { Summary } from "./Summary.jsx";
import { QuizContext } from "./QuizContext.js";

export function Quiz() {
  const { currentQuestion, questions, userAnswers } = useContext(QuizContext);

  if (questions.length === userAnswers.length) {
    return <Summary />;
  }

  return (
    <div id="quiz">
      <Question key={currentQuestion.id} />
    </div>
  );
}
