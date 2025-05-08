import quizCompleteImg from "../assets/quiz-complete.png";
import { useQuizContext } from "./QuizContext";

const MAX_PERCENTAGE = 100;

export function Summary() {
  const { questions, userAnswers } = useQuizContext();

  const skippedAnswers = userAnswers.filter(({ answer }) => answer === "skipped");
  const correctAnswers = userAnswers.filter(({ isCorrect }) => isCorrect);

  const skippedAnswersShare = Math.round((skippedAnswers.length / userAnswers.length) * MAX_PERCENTAGE);
  const correctAnswersShare = Math.round((correctAnswers.length / userAnswers.length) * MAX_PERCENTAGE);
  const wrongAnswersShare = MAX_PERCENTAGE - skippedAnswersShare - correctAnswersShare;

  function getCssClasses(isCorrect, isSkipped) {
    const cssClass = "user-answer";

    if (isSkipped) {
      return `${cssClass} skipped`;
    }

    if (isCorrect) {
      return `${cssClass} correct`;
    }

    return `${cssClass} wrong`;
  }

  function renderAnswer(answer, isCorrect, index) {
    const isSkipped = answer === "skipped";

    return (
      <li key={`${answer}-${index}`}>
        <h3>{index + 1}</h3>
        <p className="question">{questions[index].text}</p>
        <p className={getCssClasses(isCorrect, isSkipped)}>{isSkipped ? "Skipped" : answer}</p>
      </li>
    );
  }

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>{userAnswers.map(({ answer, isCorrect }, index) => renderAnswer(answer, isCorrect, index))}</ol>
    </div>
  );
}
