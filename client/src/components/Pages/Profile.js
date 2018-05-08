import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col, Collapse, Button } from "reactstrap";
import NavTabs from "../NavTabs";
import SidebarContainer from "../Sidebar";
import Footer from "../Footer";
import Graph from "../Pages/Graph";

class Profile extends Component {
  

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
            
            <Col lg="10" className="home">
              
            <div>
    <h1>About You</h1>
    <p>
      I just started using this app last week. My hope is that it will help me become more aware of my ups and downs as I see my moods graphed over time. When I meet with my therapist, I usually find it hard to rememember how my week went and when exactly I was feeling good or bad, especially if I haven't seen her in over a week. 
    </p>
  </div>

              
            </Col>
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

export default Profile;
