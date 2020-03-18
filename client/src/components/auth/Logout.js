import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { NavLink } from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../../Views/Home/actions";
import PropTypes from "prop-types";


export class Logout extends Component {
  state = {
    redirect: false
  };

  static propTypes = {
    logout: PropTypes.func.isRequired
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
        {this.renderRedirect()}
        <NavLink to={"/"} onClick={this.props.logout}></NavLink>
      </>
    );
  }
}

export default connect(null, { logout })(Logout);
