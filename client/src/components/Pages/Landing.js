import React, { Component } from "react";
<<<<<<< Updated upstream
// import {
//   BrowserRouter 
// } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Wrapper from "../Wrapper";
import Forms from "../../components/Login/Forms";
// import Main from "../Main";
=======
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Wrapper from "../Wrapper";
import Login from "../Login";
import Main from "../Main";
>>>>>>> Stashed changes
import "../../UserRoutes/html-routes.js";
import "./PagesStyles/Landing.css";

class Landing extends Component {
  render() {
    return (
<<<<<<< Updated upstream
      <Wrapper>
        <Row>
          <Col lg="8" className="blank-area" />
          <Col lg="4" className="login-container">
            <Forms />
          </Col>
        </Row>
      </Wrapper>
=======
      <Router>
        <Wrapper>
          <Switch>
            <Route exact path="/../Main" component={Main} />
            <Link to="/../Main"> Main </Link>

            {/* <Route component={NoMatch} /> */}
          </Switch>
          <Row>
            <Col lg="8" className="blank-area" />
            <Col lg="4" className="login-container">
              <Login />
            </Col>
          </Row>
        </Wrapper>
      </Router>
>>>>>>> Stashed changes
    );
  }
}

export default Landing;
