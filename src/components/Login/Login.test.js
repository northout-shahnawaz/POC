import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Login";

it("Welcome renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Welcome />, div);
});
