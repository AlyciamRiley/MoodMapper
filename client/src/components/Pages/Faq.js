import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col, Collapse, Button } from "reactstrap";
import NavTabs from "../NavTabs";
import SidebarContainer from "../Sidebar";
import Footer from "../Footer";
import Graph from "../Pages/Graph";
import Profile from "../Pages/Profile";
import Survey from "../Pages/Survey";
import "./PagesStyles/Faq.css";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

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
              <Button
                color="link"
                className="btn"
                onClick={this.toggle}
                style={{ marginBottom: "1rem" }}
              >
                <i class="fas fa-angle-double-right" />{" "}
                <span className="header"> Who is this for?</span>{" "}
              </Button>
              <Collapse isOpen={this.state.collapse}>
                <p className="answer">
                  Anyone who wants to track their mood or mental health over
                  time. Our hope is you will begin to recognize patterns and
                  make more informed decisions based on the details of your day.
                </p>
              </Collapse>
              <br />

              <Button
                color="link"
                className="btn"
                onClick={this.toggle}
                style={{ marginBottom: "1rem" }}
              >
                <i class="fas fa-angle-double-right" />{" "}
                <span className="header"> How does this work?</span>{" "}
              </Button>
              <Collapse isOpen={this.state.collapse}>
                <p className="answer">
                  Every day you can log in and take a short survey that will
                  measure your feelings. You can also make journal entries. The
                  survey responses will be graphed over time. In this way, you
                  can look at a specific day on the graph to see the
                  corresponding journal entries.
                </p>
              </Collapse>
              <br />

              <Button
                color="link"
                className="btn"
                onClick={this.toggle}
                style={{ marginBottom: "1rem" }}
              >
                <i class="fas fa-angle-double-right" />{" "}
                <span className="header">
                  {" "}
                  Does this replace seeing a mental health professional?
                </span>{" "}
              </Button>
              <Collapse isOpen={this.state.collapse}>
                <p className="answer">
                  No. This is a tool you may choose to use with your therapist,
                  but it is not intended to supplement professional mental
                  health care.
                </p>
              </Collapse>
              <br />

              <Button
                color="link"
                className="btn"
                onClick={this.toggle}
                style={{ marginBottom: "1rem" }}
              >
                <i class="fas fa-angle-double-right" />{" "}
                <span className="header">
                  {" "}
                  Why don't I see my specific diagnosis on here?
                </span>{" "}
              </Button>
              <Collapse isOpen={this.state.collapse}>
                <p className="answer">
                  We chose to focus on anxiety and depression because they are
                  the most commonly diagnosed mood disorders.
                </p>
              </Collapse>
              <br />
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

export default Faq;
