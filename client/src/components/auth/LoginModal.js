import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../containers/Home/actions";
import { clearErrors } from "../../constants/errorActions";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

class LoginModal extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    msg: null,
    redirect: false,
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = { email, password };

    // Attempt to login
    this.props.login(user);
  };

  setRedirect = () => {
    this.setState({ redirect: true });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <>
        <Button onClick={this.toggle} variant="outlined">
          <Typography color="textSecondary" variant="p">
            Login with email
          </Typography>
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Login with email and password
          </ModalHeader>

          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}

            {/* add form validation */}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                {/* add adornment to delete all entries */}
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Please type your Email ID here"
                  className="mb-3"
                  onChange={this.onChange}
                />

                {/* add adornment to delete all entries */}
                {/* add adornment to show/ hide password */}
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Please type your Password here"
                  className="mb-3"
                  onChange={this.onChange}
                />

                {this.renderRedirect()}
                <Button
                  to={"/"}
                  color="dark"
                  style={{ marginTop: "2rem" }}
                  block
                >
                  Login
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
