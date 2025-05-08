import { QuestionTimer } from "./QuestionTimer";
import { Answers } from "./Answers";
import { useMemo } from "react";
import { useQuizContext } from "./QuizContext";
import { ANSWERED_TIMER, LOADING_TIMER, TIME_TO_ANSWER } from "./constants.js";

export function Question() {
  const { currentQuestion, currentAnswer } = useQuizContext();

  const timer = useMemo(() => {
    if (currentAnswer.state === "answered") {
      return LOADING_TIMER;
    }

    if (currentAnswer.state === "correct" || currentAnswer.state === "wrong") {
      return ANSWERED_TIMER;
    }

    return TIME_TO_ANSWER;
  }, [currentAnswer.state]);

  return (
    <div id="question">
      <QuestionTimer key={`${currentQuestion.id}-${timer}`} timer={timer} />
      <h2>{currentQuestion.text}</h2>
      <Answers />
    </div>
  );
}
