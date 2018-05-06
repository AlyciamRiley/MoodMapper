import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import { Row, Col } from "reactstrap";
import Wrapper from "../Wrapper";
import Forms from "../../components/Login/Forms";
import Main from "../Main";
import "../../UserRoutes/html-routes.js";
import "./PagesStyles/Landing.css";

class Landing extends Component {
  render() {
    return (
      <Wrapper>
        <Row>
          <Col lg="8" className="blank-area" />
          <Col lg="4" className="login-container">
            <Forms />
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default Landing;
