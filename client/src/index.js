
import ReactDOM from "react-dom";
import React from "react";
// import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Landing from "../src/components/Pages/Landing";
import Main from "./components/Main";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
