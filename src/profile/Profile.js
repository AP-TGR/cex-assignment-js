import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { fetchProfile } from "./actions";

class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchProfile();
    }

    render() {
        if (this.props.data === undefined) {
            return <h1>loading</h1>;
        }
        return (
            <div style={{ padding: "50px" }}>
                <Form>
                    <h1>Profile Details</h1>
                    <FormGroup>
                        <Label for="first_name">First Name</Label>
                        <Input plaintext value={this.props.data.first_name} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="last_name">Last Name</Label>
                        <Input plaintext value={this.props.data.last_name} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">User Name</Label>
                        {this.props.data.username}
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        {this.props.data.email}
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.profile.loading,
    data: state.profile.data,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProfile: (payload) => {
            dispatch(fetchProfile(payload));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
