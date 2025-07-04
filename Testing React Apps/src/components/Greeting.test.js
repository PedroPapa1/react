import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Greeting } from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    const { getByText } = render(<Greeting />);

    const helloWorldElement = getByText("Hello World!");
    expect(helloWorldElement).toBeVisible();
  });

  test('renders "good to see you" if the was NOT cliked', () => {
    const { getByText } = render(<Greeting />);

    const outputElemnt = getByText("good to see you", { exact: false });
    expect(outputElemnt).toBeVisible();
  });
  test('renders "Changed!" if the was cliked', () => {
    const { getByText } = render(<Greeting />);

    const buttonElement = getByText("Change Text!");
    userEvent.click(buttonElement);

    const outputElemnt = getByText("Changed!");
    expect(outputElemnt).toBeVisible();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    const { getByText, queryByText } = render(<Greeting />);

    const buttonElement = getByText("Change Text!");
    userEvent.click(buttonElement);

    const outputElemnt = queryByText("good to see you", { exact: false });
    expect(outputElemnt).toBeNull();
  });
});

// arrange, act, assert
