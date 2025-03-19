import { UserInput } from "../UserInput/UserInput";
import { Result } from "../Result/Result";
import { useState } from "react";

export function Calculator() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p class="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}
