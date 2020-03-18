import { combineReducers } from "redux";
// import cityReducer from "./cityReducer";
import cityReducer from "../Views/Cities/reducers";
import itReducer from "./itReducer";
import actReducer from "./actReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import favReducer from "./favReducer";
import comReducer from "./comReducer";

export default combineReducers({
  city: cityReducer,
  itinerary: itReducer,
  activity: actReducer,
  error: errorReducer,
  auth: authReducer,
  favorite: favReducer,
  comment: comReducer
});
