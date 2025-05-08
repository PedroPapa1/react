import { createContext, useContext } from "react";

export const QuizContext = createContext();

export const useQuizContext = () => {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuizContext must be used within a QuizContextProvider");
  }

  return context;
};
