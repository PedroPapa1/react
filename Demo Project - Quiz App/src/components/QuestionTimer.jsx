import { useEffect } from "react";
import { useState } from "react";
import { useQuizContext } from "./QuizContext";

const TIMER_DECREMENT = 100;

export function QuestionTimer({ timer }) {
  const { skipAnswer, currentAnswer } = useQuizContext();
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentAnswer.answer === "") {
        skipAnswer();
      }
    }, timer);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timer, skipAnswer, currentAnswer.answer]);

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
