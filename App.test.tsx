import React from "react";
import { render } from "@testing-library/react-native";
import App from "./App";

describe("App component", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<App />);
    const appComponent = getByTestId("app-component");
    expect(appComponent).toBeTruthy();
  });

  it("navigates to Splash screen initially", () => {
    const { getByTestId } = render(<App />);
    const splashScreen = getByTestId("Splash");
    expect(splashScreen).toBeTruthy();
  });
});
