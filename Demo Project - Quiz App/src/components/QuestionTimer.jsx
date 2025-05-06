import { useContext, useEffect } from "react";
import { useState } from "react";
import { QuizContext } from "./QuizContext";

const TIMER_DECREMENT = 100;

export function QuestionTimer({ timer }) {
  const { handleSkipAnswer, currentAnswer } = useContext(QuizContext);
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentAnswer.answer === "") {
        handleSkipAnswer();
      }
    }, timer);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timer, handleSkipAnswer, currentAnswer.answer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - TIMER_DECREMENT);
    }, TIMER_DECREMENT);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timer} value={remainingTime} className={currentAnswer.state} />;
}
