import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("AddCategory tests", () => {
  test("Should change box value", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Ball" } });

    expect(input.value).toBe("Ball");
    screen.debug();
  });
  test("Should NOT push new category when value is empty", () => {
    const mockFunction = jest.fn();
    render(<AddCategory onNewCategory={mockFunction} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "" } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(mockFunction).not.toHaveBeenCalled();
  });
  test("Should PUSH new category when value is empty", () => {
    const mockFunction = jest.fn();
    render(<AddCategory onNewCategory={mockFunction} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "ball 2" } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(mockFunction).toHaveBeenCalledWith("ball 2");
  });
});
