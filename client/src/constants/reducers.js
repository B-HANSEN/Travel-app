import { combineReducers } from "redux";
import cityReducer from "../Views/Cities/reducers";
import authReducer from "../Views/Home/reducers";
import favReducer from "../Views/Favorites/reducers";
import comReducer from "../Views/MYtinerary/reducers";
import itReducer from "../Views/MYtinerary/reducers";
import actReducer from "../Views/MYtinerary/reducers";
import errorReducer from "./errorReducer";

export default combineReducers({
  city: cityReducer,
  itinerary: itReducer,
  activity: actReducer,
  error: errorReducer,
  auth: authReducer,
  favorite: favReducer,
  comment: comReducer
});
