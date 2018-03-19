import * as actionTypes from '../actions/actionTypes';

const initialPosts = {
  allPosts: [],
  selectedPost: null,
};

export default (state = initialPosts, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_POSTS:
      return {
        allPosts: action.payload,
      };
    case actionTypes.SELECTED_POST:
      return {
        ...state,
        selectedPost: action.payload || null,
      };

    default:
      return state;
  }
};
