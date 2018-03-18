import * as actionTypes from '../actions/actionTypes';

const initialPosts = {
  allPosts: [],
};

export default (state = initialPosts, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_POSTS:
      return {
        ...state,
        allPosts: state.allPosts.concat(action.payload),
      };

    default:
      return state;
  }
};
