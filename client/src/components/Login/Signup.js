import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

export default class Signup extends React.Component {
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

    axios({
      method: "post",
      url: "/api/signup",
      data: {
        email: this.state.email,
        password: this.state.password
      }
      // beforeSend: function(){
      //     this.setState({loading: true});
      // }.bind(this)
    });
    console.log("THIS", this);
    // xhr.done = function(data){
    //     this.refs.user_form.getDOMNode().reset();
    //     this.setState = false;
    //     //TODO: redirect to a route
    // }
  };

  handleChange = event => {
    var state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  render() {
    return (
      <Form onSubmit={() => this.handleSubmit}>
        <FormGroup>
          <Label for="signUpEmail">Email</Label>
          <Input
            onChange={this.handleChange}
            type="email"
            name="email"
            id="signUpEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="SignUpPassword">Password</Label>
          <Input
            onChange={this.handleChange}
            type="password"
            name="password"
            id="signUpPassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button id="submitSignup">Submit</Button>
      </Form>
    );
  }
}
