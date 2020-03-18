import {
    GET_FAVORITES,
    FAVORITES_LOADING,
    FAVORITE_COUNT
  } from "../../constants/actionTypes";
  
  const initialState = {
    favorites: [],
    favorite: {},
    ratings: "",
    loading: false,
    msg: ""
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_FAVORITES:
        return {
          ...state,
          favorites: action.payload,
          loading: false
        };
      case FAVORITES_LOADING:
        return {
          ...state,
          loading: true
        };
      case FAVORITE_COUNT:
        console.log(action.payload);
        return {
          ...state,
          favorites: state.favorites.filter(fav => fav._id !== action.payload),
          loading: false
        };
      default:
        return state;
    }
  }
  