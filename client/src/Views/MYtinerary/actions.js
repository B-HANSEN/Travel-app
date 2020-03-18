import {
    GET_ITINERARIES,
    ITINERARIES_LOADING,
    GET_ACTIVITIES,
    ACTIVITIES_LOADING,
    GET_COMMENTS,
    COMMENTS_LOADING
  } from "../../constants/actionTypes";
  import axios from "axios";
  
  export const getItineraries = cityId => dispatch => {
    dispatch(setItinerariesLoading());
    axios.get("/api/itineraries/" + cityId).then(res =>
      dispatch({
        type: GET_ITINERARIES,
        payload: res.data
      })
    );
  };
  
  export const setItinerariesLoading = () => {
    return {
      type: ITINERARIES_LOADING
    };
  };
  
  export const getActivities = itinId => dispatch => {
    dispatch(setActivitiesLoading());
    axios.get("/api/activities/" + itinId).then(res =>
      dispatch({
        type: GET_ACTIVITIES,
        payload: res.data
      })
    );
  };
  
  export const setActivitiesLoading = () => {
    return {
      type: ACTIVITIES_LOADING
    };
  };
  
  export const getComments = itinId => dispatch => {
    dispatch(setCommentsLoading());
    axios.get("/api/comments/" + itinId).then(res =>
      dispatch({
        type: GET_COMMENTS,
        payload: res.data
      })
    );
  };
  
  export const setCommentsLoading = () => {
    return {
      type: COMMENTS_LOADING
    };
  };
  