import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { removeFromFavorites, removeLikes } from "../actions/favActions";
import { removeFromFavorites, removeLikes } from "../containers/Favorites/actions";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

class ToUnlike extends Component {
  decreaseFavorites = () => {
    this.props.removeFromFavorites(this.props.itinId, this.props.auth.user._id);
    this.props.removeLikes(this.props.itinId, -1, this.props.cityId);
  };

  render() {
    return (
      <Link onClick={this.decreaseFavorites}>
        <MDBIcon icon="heart" className="bluehighlight" />
      </Link>
    );
  }
}

ToUnlike.propTypes = {
  itinerary: PropTypes.object.isRequired,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  itinerary: state.itinerary,
  auth: state.auth
});

export default connect(mapStateToProps, {
  removeFromFavorites,
  removeLikes
})(ToUnlike);
