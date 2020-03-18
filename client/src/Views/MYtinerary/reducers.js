import {
  GET_ITINERARIES,
  ITINERARIES_LOADING,
  GET_ACTIVITIES,
  ACTIVITIES_LOADING,
  GET_COMMENTS,
  COMMENTS_LOADING,
  ADD_COMMENT
} from "../../constants/actionTypes";

const initialState = {
  itineraries: [],
  itinerary: {},
  activities: [],
  activity: {},
  comments: [],
  comment: {},
  loading: false,
  msg: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITINERARIES:
      return {
        ...state,
        itineraries: action.payload,
        loading: false
      };
    case ITINERARIES_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        loading: false
      };
    case ACTIVITIES_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        loading: false
      };
    // to add item, send new comment and all old ones
    case ADD_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments]
      };
    case COMMENTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
