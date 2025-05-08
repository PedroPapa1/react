import { useMemo } from "react";
import { useQuizContext } from "./QuizContext";

export function Answers() {
  const { selectAnswer, currentAnswer, currentQuestion } = useQuizContext();

  const shuffledAnswers = useMemo(() => currentQuestion.answers.toSorted(() => Math.random() - 0.5), [currentQuestion]);

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
            onClick={() => selectAnswer(answerOption)}
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
