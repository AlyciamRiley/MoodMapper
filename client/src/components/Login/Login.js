import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

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

    axios.post('/api/login', { email, password })
    // code goes here to redirect from server
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
      <FormGroup>
          <Label for="loginEmail">Email</Label>
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
          <Label for="loginPassword">Password</Label>
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
      </form>
    );
  }
}


// export default class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       loading: false
//     };
//   }

//   handleSubmitForm = event => {
//     this.preventDefault();
//     console.log(this.state.email);

//     var xhr = function() {
//       // return
//       axios({
//         url: "/api/login",
//         type: "POST",
//         data: {
//           email: this.state.email,
//           password: this.state.password
//         },
//         beforeSend: function() {
//           this.setState({ loading: true });
//         }.bind(this)
//       });
//     };
//     xhr.done = function(data) {
//       this.refs.user_form.getDOMNode().reset();
//       this.setState = false;
//       //TODO: redirect to a route
//     };
//   };

//   handleChange = event => {
//     var state = {};
//     state[event.target.name] = event.target.value;
//     this.setState(state);
//   };
//   render() {
//     return (
//       <Form action="/api/login" method="post">
//         <FormGroup>
//           <Label for="loginEmail">Email</Label>
//           <Input
//             key="emailKey"
//             type="email"
//             name="email"
//             id="loginEmail"
//             placeholder="with a placeholder"
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="loginPassword">Password</Label>
//           <Input
//             key="passwordKey"
//             type="password"
//             name="password"
//             id="loginPassword"
//             placeholder="password placeholder"
//           />
//         </FormGroup>
//         <Button type="submit">Submit</Button>
//       </Form>
//     );
//   }
// }
