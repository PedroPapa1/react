import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { QuizContext } from "./useQuizContext.js";
import { ANSWERED_TIMER, LOADING_TIMER } from "../constants.js";
import { checkAnswer } from "./checkAnswer.js";

export function QuizProvider({ children, questions }) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState({
    answer: "",
    state: "",
  });

  const currentQuestion = useMemo(() => questions[userAnswers.length], [userAnswers]);

  const loadingTimeoutRef = useRef(undefined);
  const answeredTimeoutRef = useRef(undefined);

  useEffect(() => {
    return () => {
      clearTimeout(loadingTimeoutRef.current);
      clearTimeout(answeredTimeoutRef.current);
    };
  }, []);

  const skipAnswer = useCallback(() => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, { answer: "skipped", isCorrect: false }]);
    setCurrentAnswer({
      answer: "",
      state: "",
    });
  }, [setCurrentAnswer, setUserAnswers]);

  const selectAnswer = useCallback(
    (answer) => {
      const isCorrect = checkAnswer(answer, questions, userAnswers.length);

      setCurrentAnswer({
        answer,
        state: "answered",
      });

      loadingTimeoutRef.current = setTimeout(() => {
        setCurrentAnswer({
          answer,
          state: isCorrect ? "correct" : "wrong",
        });

        answeredTimeoutRef.current = setTimeout(() => {
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
        questions,
        selectAnswer,
        skipAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
