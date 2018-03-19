import * as actionTypes from '../actions/actionTypes';

const initialState = {
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COMMENTS:
      return { comments: action.payload };

    default:
      return state;
  }
};
