import { combineReducers } from "redux";
import contacts from "../reducers/contactReducer";

export default combineReducers({
  contacts: contacts,
});
