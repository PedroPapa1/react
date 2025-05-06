import { useContext, useMemo } from "react";
import { QuizContext } from "./QuizContext.js";

export function Answers() {
  const { handleSelectAnswer, currentAnswer, currentQuestion } = useContext(QuizContext);

  const shuffledAnswers = useMemo(
    () => [...currentQuestion.answers].sort(() => Math.random() - 0.5),
    [currentQuestion]
  );

  function getCssClasses(answerOption) {
    const isSelected = currentAnswer.answer === answerOption;

    if (currentAnswer.state === "answered" && isSelected) {
      return "selected";
    }

    if ((currentAnswer.state === "correct" || currentAnswer.state === "wrong") && isSelected) {
      return currentAnswer.state;
    }

    return "";
  }

  return (
    <ul id="answers">
      {shuffledAnswers.map((answerOption) => (
        <li key={answerOption} className="answer">
          <button
            onClick={() => handleSelectAnswer(answerOption)}
            className={getCssClasses(answerOption)}
            disabled={currentAnswer.state !== ""}
          >
            {answerOption}
          </button>
        </li>
      ))}
    </ul>
  );
}
