import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
import { collapseSidebar } from "./ContextApi/sidebarContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <collapseSidebar>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </collapseSidebar>
  </Provider>,
  document.getElementById("root")
);
