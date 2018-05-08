import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }

  handleSubmitForm = event => {
    this.preventDefault();
    console.log(this.state.email);

    var xhr = function() {
      // return
      axios({
        url: "/api/login",
        type: "POST",
        data: {
          email: this.state.email,
          password: this.state.password
        },
        beforeSend: function() {
          this.setState({ loading: true });
        }.bind(this)
      });
    };
    xhr.done = function(data) {
      this.refs.user_form.getDOMNode().reset();
      this.setState = false;
      //TODO: redirect to a route
    };
  };

  handleChange = event => {
    var state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  };
  render() {
    return (
      <Form action="/api/login" method="post">
        <FormGroup>
          <Label for="loginEmail">Email</Label>
          <Input
            key="emailKey"
            type="email"
            name="email"
            id="loginEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="loginPassword">Password</Label>
          <Input
            key="passwordKey"
            type="password"
            name="password"
            id="loginPassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
