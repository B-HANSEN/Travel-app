import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToFavorites, getFavorites } from '../actions/favActions';
import { loadUser } from '../actions/authActions';

class ToLike extends Component {
    state = {
        liked: false
    }
    addToFavorites = () => {
        console.log('itinId',this.props.itinId)
        console.log('user._id', this.props.auth.user._id)
    
     this.props.addToFavorites(this.props.itinId, this.props.auth.user._id)
    }

    render() {
        return (
            <button
                liked={ this.state.liked }
                onClick={ this.addToFavorites }
            >
            to like
            </button>
        )
    }
};

ToLike.propTypes = {
    addToFavorites: PropTypes.func.isRequired,
    getFavorites: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
    itinerary: PropTypes.object.isRequired,
    user: PropTypes.object
  }

const mapStateToProps = (state) => ({
    itinerary: state.itinerary,
    auth: state.auth,
    favorite: state.favorite
})

export default connect (mapStateToProps, {
    addToFavorites,
    getFavorites,
    loadUser
}) (ToLike)