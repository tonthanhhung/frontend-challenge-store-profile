import "@testing-library/jest-dom/extend-expect";
import { useToast, withToastProvider } from "./Toast";
import * as React from "react";
import { useEffect } from "react";
import { render, screen, wait } from "@testing-library/react";

describe("Toast Test Suite", () => {
  it("addToast will show text", () => {
    const testMessage = "This is the content";
    const App = withToastProvider(() => {
      const { add: addToast } = useToast();
      useEffect(() => {
        addToast(testMessage);
      }, []);
      return <div />;
    });
    render(<App />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });

  it("addToast will disappear after 5s", async () => {
    const testMessage = "This is the content";
    const App = withToastProvider(() => {
      const { add: addToast } = useToast();
      useEffect(() => {
        addToast(testMessage);
      }, []);
      return <div />;
    });
    render(<App />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
