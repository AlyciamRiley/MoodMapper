import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import NavTabs from "../NavTabs";
import SidebarContainer from "../Sidebar";
import Footer from "../Footer";

class Main extends Component {
  render() {
    return (
      <Router>
        <Container className="reactstrapContainer">
          <Row>
            <Col lg="12" className="NavTabs">
              <NavTabs />
            </Col>
          </Row>
          <Row>
            <Col lg="2" className="sidebar">
              <SidebarContainer />{" "}
            </Col>
            <Col lg="10" className="home" />
          </Row>
          <Row>
            <Col lg="12" className="footer">
              <Footer />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default Main;
