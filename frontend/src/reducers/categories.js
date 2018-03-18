import * as actionTypes from '../actions/actionTypes';

const initialState = {
  categories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return action.payload;

    default:
      return state;
  }
};
