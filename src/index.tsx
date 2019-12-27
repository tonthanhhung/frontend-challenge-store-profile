import "es6-promise/auto";
import "babel-polyfill";
import "./styles/style.scss";
import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import reducers from "./redux";
import { Provider } from "react-redux";

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
