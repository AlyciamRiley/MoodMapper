import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/";
import Landing from "./components/Pages/Landing";
import Faq from "./components/Pages/Faq";
import Graph from "./components/Pages/Graph";
import Profile from "./components/Pages/Profile";
import Survey from "./components/Pages/Survey";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Survey" component={Survey} />
          <Route exact path="/Graph" component={Graph} />

          <Route exact path="/Faq" component={Faq} />
          <Route exact path="/Profile" component={Profile} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
