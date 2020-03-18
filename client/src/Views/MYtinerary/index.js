import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../../components/Footer";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import SingleItin from "../../components/SingleItin";
import { getItineraries } from "../../actions/itActions";
// import { getCityById } from "../actions/citiesActions";
import { getCityById } from "../Cities/actions";
import PropTypes from "prop-types";
import "../views.css";

class MYtinerary extends React.Component {
  state = {
    itineraries: [],
    redirect: false,
    selectedItin: ""
  };

  componentDidMount() {
    this.props.getCityById(this.props.match.params.cityId); // load single city page showing cityPic
    this.props.getItineraries(this.props.match.params.cityId); // load all itineraries related to this city
  }

  handleSelection = id => {
    this.setState({ selectedItin: id });
  };

  // link back to Cities page
  setRedirect = () => {
    this.setState({ redirect: true });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/cities" />;
    }
  };

  render() {
    return (
      <>
        <div className="title">
          <img
            className="titlePic"
            src={this.props.city.city.img}
            alt="titlePic"
          />
          <h3>{this.props.city.city.city}</h3>

          {this.props.itinerary.itineraries.length === 0 ? (
            <p>
              There is no itineraries yet. <br /> Please check back later or
              create your own itinerary.
            </p>
          ) : (
            <div>
              <h5>Available MYtineraries:</h5>
              {this.props.itinerary.itineraries.map((itinerary, index) => (
                <SingleItin
                  key={index}
                  itin={itinerary}
                  selectedItin={this.state.selectedItin}
                  handleSelection={this.handleSelection}
                />
              ))}
            </div>
          )}

          <div className="center">
            {this.renderRedirect()}
            <Link
              className="otherCity"
              onClick={this.setRedirect}
              to={"/cities"}
            >
              Choose another city...
            </Link>
          </div>
          <ScrollUpButton AnimationDuration={1000} />
        </div>
        <Footer />
      </>
    );
  }
}

MYtinerary.propTypes = {
  getItineraries: PropTypes.func.isRequired,
  getCityById: PropTypes.func.isRequired,
  itinerary: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itinerary: state.itinerary,
  city: state.city
});

export default connect(mapStateToProps, { getItineraries, getCityById })(
  MYtinerary
);
