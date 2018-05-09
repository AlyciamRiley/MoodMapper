import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "./Forms.css";


export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    axios.post('/api/signup', { email, password })
    window.location = '/Profile';
  }

  render() {
    const { email, password } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
      <FormGroup className="email-header">
          <Label for="signUpEmail" className="form-header">Email</Label>
          <Input
            onChange={this.onChange}
            type="text"
            name="email"
            value={email}
            id="signUpEmail"
            placeholder="Your Email Address"
          />
        </FormGroup>
        <FormGroup>
          <Label for="SignUpPassword" className="form-header">Password</Label>
          <Input
            onChange={this.onChange}
            type="text"
            name="password"
            value={password}
            id="signUpPassword"
            placeholder="Your Password"
          />
        </FormGroup>
        <Button type="submit" id="submitSignup">Submit</Button>
      </Form>
    );
  }
}
