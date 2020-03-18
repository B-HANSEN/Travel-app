import { combineReducers } from "redux";
import cityReducer from "../containers/Cities/reducers";
import authReducer from "../containers/Home/reducers";
import favReducer from "../containers/Favorites/reducers";
import comReducer from "../containers/MYtinerary/reducers";
import itReducer from "../containers/MYtinerary/reducers";
import actReducer from "../containers/MYtinerary/reducers";
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
