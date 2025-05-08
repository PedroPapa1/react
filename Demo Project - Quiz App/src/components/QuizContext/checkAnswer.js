const CORRECT_ANSWER_INDEX = 0;

export function checkAnswer(answer, questions, questionIndex) {
  return answer === questions[questionIndex].answers[CORRECT_ANSWER_INDEX];
}
