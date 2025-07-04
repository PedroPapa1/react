import { render } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    const { findAllByRole } = render(<Async />);

    const listItemElements = await findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
