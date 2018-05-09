import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Wrapper from "../Wrapper";
import Forms from "../../components/Login/Forms";
// import Main from "../Main";
import "../../UserRoutes/html-routes.js";
import "./PagesStyles/Landing.css";

class Landing extends Component {
  render() {
    return (
      <Wrapper>
        <div className="landing-container">
          <Row>
            <Col lg="8" className="blank-area" />

            <Col lg="4" className="login-container">
              <Forms />

              <NavLink to="/Main">
                This will take you to the main page for dev purposes.
              </NavLink>
            </Col>
          </Row>
        </div>
      </Wrapper>
    );
  }
}

export default Landing;
