import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";

export default class Signup extends React.Component {  
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }

handleSubmitForm = (event) => {
    this.preventDefault();  
   
       

    var xhr = function(){
      return 
      axios ({
        url:'/api/signup',
        type: 'POST',
        data: {
          email: this.state.email,
          password: this.state.password
        },
        beforeSend: function(){
            this.setState({loading: true});
        }.bind(this)
       
      })
      console.log("this" , this);
    } 
    xhr.done = function(data){
        this.refs.user_form.getDOMNode().reset();
        this.setState = false;
        //TODO: redirect to a route
    }
}

  handleChange = (event) => {
    var state = {};
    state[event.target.name] =
    (event.target.value);
    this.setState(state);
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button id="submitSignup">Submit</Button>
      </Form>
    );
  }
}