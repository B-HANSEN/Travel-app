import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { addToFavorites, addLikes } from "../actions/favActions";
import { addToFavorites, addLikes } from "../containers/Favorites/actions";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBIcon } from "mdbreact";

// TODO: put into one component together with ToUnlike:

class ToLike extends Component {
  increaseFavorites = () => {
    this.props.addToFavorites(this.props.itinId, this.props.auth.user._id);
    this.props.addLikes(this.props.itinId, 1, this.props.cityId);
  };

  render() {
    return (
      <Link onClick={this.increaseFavorites}>
        <MDBIcon far icon="heart" className="bluehighlight" />
      </Link>
    );
  }
}

ToLike.propTypes = {
  itinerary: PropTypes.object.isRequired,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  itinerary: state.itinerary,
  auth: state.auth
});

export default connect(mapStateToProps, {
  addToFavorites,
  addLikes
})(ToLike);
