import * as actionTypes from "../actions/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:
      return [...state, Object.assign({}, action.contact)];
    case actionTypes.DELETE_CONTACT:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};
