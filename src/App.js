import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',

      registerUsername: '',
      registerPassword: '',
      confirmPassword: ''
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>

        <h2>
          Returning User
      </h2>

        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="name" value={this.state.username} onChange={this.changeHandler} name="username" id="username" placeholder="username" />
          </FormGroup>
          <FormGroup>
            <Label for="loginPassword">Password</Label>
            <Input type="password" value={this.state.password} onChange={this.changeHandler} name="password" id="loginPassword" placeholder="password" />
          </FormGroup>
          <Button>Login</Button>
        </Form>

        <hr />

        <h2>
          New User
        </h2>

        <Form>
          <FormGroup>
            <Label for="registerUsername">Username</Label>
            <Input type="name" value={this.state.registerUsername} onChange={this.changeHandler} name="registerUsername" id="username" placeholder="username" />
          </FormGroup>
          <FormGroup>
            <Label for="registerPassword">Password</Label>
            <Input type="password" value={this.state.registerPassword} onChange={this.changeHandler} name="registerPassword" id="registerPassword" placeholder="password" />
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword">Password</Label>
            <Input type="password" value={this.state.confirmPassword} onChange={this.changeHandler} name="confirmPassword" id="confirmPassword" placeholder="confirm password" />
          </FormGroup>
          <Button>Register</Button>
        </Form>

      </div>
    );
  }
}

export default App;
