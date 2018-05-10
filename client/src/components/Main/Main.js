import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import NavTabs from "../NavTabs";
import SidebarContainer from "../Sidebar";
import Footer from "../Footer";
import "./Main.css";
import "../Pages/PagesStyles/mobile.css";

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

            <Col lg="10" className="home">
              <div>
                <Row className="info-card-container">
                  <Col lg="6">
                    <Card>
                      <CardHeader className="card-header">
                        Individual
                      </CardHeader>
                      <CardBody>
                        <CardText>
                          Track your moods overtime to monitor patterns that
                          contribute to fluctuations in anxiety and depresstion.
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col lg="6">
                    <Card>
                      <CardHeader className="card-header">Clinical</CardHeader>
                      <CardBody>
                        <CardTitle>
                          Use as a supplment to talk therapy to better
                          understand your clients day-to-day experience
                        </CardTitle>
                        <CardText />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
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

export default Main;
