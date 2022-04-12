import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

import App from "./components/App";
import store from "./features/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import './index.scss';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
