import { useState, useCallback, useMemo } from "react";
import { QuizContext } from "./QuizContext.js";
import QUESTIONS from "../questions.js";
import { ANSWERED_TIMER, LOADING_TIMER } from "./constants.js";

const CORRECT_ANSWER_INDEX = 0;

function checkAnswer(answer, questionIndex) {
  return answer === QUESTIONS[questionIndex].answers[CORRECT_ANSWER_INDEX];
}

export function QuizProvider({ children }) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState({
    answer: "",
    state: "",
  });

  const currentQuestion = useMemo(() => QUESTIONS[userAnswers.length], [userAnswers]);

  const handleSkipAnswer = useCallback(() => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, { answer: "skipped", isCorrect: false }]);
    setCurrentAnswer({
      answer: "",
      state: "",
    });
  }, [setCurrentAnswer, setUserAnswers]);

  const handleSelectAnswer = useCallback(
    (answer) => {
      const isCorrect = checkAnswer(answer, userAnswers.length);

      setCurrentAnswer({
        answer,
        state: "answered",
      });

      setTimeout(() => {
        setCurrentAnswer({
          answer,
          state: isCorrect ? "correct" : "wrong",
        });

        setTimeout(() => {
          setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, { answer, isCorrect }];
          });
          setCurrentAnswer({
            answer: "",
            state: "",
          });
        }, ANSWERED_TIMER);
      }, LOADING_TIMER);
    },
    [setCurrentAnswer, setUserAnswers, userAnswers]
  );

  return (
    <QuizContext.Provider
      value={{
        userAnswers,
        currentQuestion,
        currentAnswer,
        questions: QUESTIONS,
        handleSelectAnswer,
        handleSkipAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
