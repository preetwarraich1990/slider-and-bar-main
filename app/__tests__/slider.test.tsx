import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SliderComponent } from "../__components/slider.component";

describe("SliderComponent", () => {
  test("renders slider with initial value", () => {
    render(<SliderComponent />);
    const sliderValue = screen.getByText("1");
    expect(sliderValue).toBeInTheDocument();
  });

  test("changes slider value on input change", () => {
    render(<SliderComponent />);
    const inputRange = screen.getByRole("slider");
    fireEvent.change(inputRange, { target: { value: "5" } });
    const updatedSliderValue = screen.getByText("5");
    expect(updatedSliderValue).toBeInTheDocument();
  });

  test("updates circle animation based on slider value", () => {
    render(<SliderComponent />);
    const inputRange = screen.getByRole("slider");
    fireEvent.change(inputRange, { target: { value: "7" } });
    const circleElement = screen.getByTestId("animated-circle");
    expect(circleElement).toHaveStyle("stroke-dasharray: 90");
  });
});
