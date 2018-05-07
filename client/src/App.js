import React, { Component } from "react";
import { BrowserRouter as Router} from "react-router-dom";

import Wrapper from "./components/Wrapper";
import Main from "./components/Main/";
// import Landing from "./components/Pages/Landing"


import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
         <Main />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
