import "es6-promise/auto";
import "babel-polyfill";
import "./styles/style.scss";
import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import reducers from "./redux";
import { Provider } from "react-redux";
import rootSaga from "./saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
