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
import { Redirect, Link } from 'react-router-dom'; 
import { loginUser } from "./actions";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
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
      
        const { username, password } = this.state;

        if (username !== "" && password !== "") {
            this.props.registerUser({
                username: this.state.username,
                password: this.state.password,
            });
        }
    };

    getErrorComponent = () => {};

    render() {
        if (this.props.isLogedIn) {
            return <Redirect to="/users/profile" />;
        }
        return (
            <div style={{ padding: "50px" }}>
                <Form>
                    <h1>Login User</h1>
                    {this.props.error !== null && (
                        <Alert color="danger">{this.props.error}</Alert>
                    )}
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
                        <Button type="button" color="primary" onClick={this.onSubmit}>Login</Button>
                        <Link className="btn btn-secondary" to="/users/register">Register</Link>
                    </ButtonGroup>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.login.loading,
    error: state.login.error,
    isLogedIn: state.login.isLogedIn
});

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (payload) => {
            dispatch(loginUser(payload));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);