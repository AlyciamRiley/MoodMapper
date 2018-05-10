import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "./Forms.css";
import "../Pages/PagesStyles/mobile.css";

export default class Login extends Component {
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

    axios.post('/api/login', { email, password });
    window.location = '/Profile';
  }

  render() {
    const { email, password } = this.state;
    return (
      
      <Form onSubmit={this.onSubmit}>
      <FormGroup className="email-header">
          <Label for="loginEmail" className="form-header">Email</Label>
          <Input
            onChange={this.onChange}
            type="text"
            key="emailKey"
            name="email"
            value={email}
            id="loginEmail"
            placeholder="Your Email Address"
          />
        </FormGroup>
        <FormGroup>
          <Label for="loginPassword" className="form-header">Password</Label>
          <Input
            onChange={this.onChange}
            type="text"
            key="passwordKey"
            name="password"
            value={password}
            id="loginPassword"
            placeholder="Your Password"
          />
        </FormGroup>
        <Button type="submit" id="submitLogin">Submit</Button>
      </Form>
    );
  }
}