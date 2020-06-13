import React from "react";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Button,
  Alert,
  ButtonGroup
} from "reactstrap";
import { Link } from 'react-router-dom'; 
import { registerUser } from "./actions";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      submitted: false,
    };
  }

  setFieldValue = (fieldName, fieldValue) => {
    this.setState({
      [fieldName]: fieldValue,
    });
  };

  onSubmit = () => {
    this.setState({
      submitted: true,
    });

    const { first_name, last_name, username, email, password } = this.state;

    if (
      first_name !== "" &&
      last_name !== "" &&
      username !== "" &&
      email !== "" &&
      password !== ""
    ) {
      this.props.registerUser({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      });
    }
  };

  getErrorComponent = () => {
    console.log(this.props.error);
  };

  render() {
    return (
      <div style={{ padding: "50px" }}>
        <Form>
          <h1>Register User</h1>
          {this.props.error !== null && (
            <Alert color="danger">{this.props.error}</Alert>
          )}
          <FormGroup>
            <Label for="first_name">First Name</Label>
            <Input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Enter First Name"
              onChange={(e) => {
                this.setFieldValue("first_name", e.target.value);
              }}
              invalid={this.state.submitted && this.state.first_name === ""}
            />
            <FormFeedback>Please enter First Name</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="last_name">Last Name</Label>
            <Input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Enter Last Name"
              onChange={(e) => {
                this.setFieldValue("last_name", e.target.value);
              }}
              invalid={this.state.submitted && this.state.last_name === ""}
            />
            <FormFeedback>Please enter Last Name</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={(e) => {
                this.setFieldValue("email", e.target.value);
              }}
              invalid={this.state.submitted && this.state.email === ""}
            />
            <FormFeedback>Please enter Email</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              onChange={(e) => {
                this.setFieldValue("username", e.target.value);
              }}
              invalid={this.state.submitted && this.state.username === ""}
            />
            <FormFeedback>Please enter Username</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e) => {
                this.setFieldValue("password", e.target.value);
              }}
              invalid={this.state.submitted && this.state.password === ""}
            />
            <FormFeedback>Please enter Password</FormFeedback>
          </FormGroup>
          <ButtonGroup>
            <Button type="button" color="primary" onClick={this.onSubmit}>
              Submit
            </Button>
            <Link className="btn btn-danger" to="/">Cancel</Link>
          </ButtonGroup>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.register.loading,
  error: state.register.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (payload) => {
      dispatch(registerUser(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
