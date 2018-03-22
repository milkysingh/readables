import * as actionTypes from '../actions/actionTypes';

const initialPosts = {
  allPosts: [],
  selectedPost: null,
  selectedCategory: '',
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

    case actionTypes.SET_VOTE: {
      const allPosts = [...state.allPosts];
      const index = allPosts.findIndex(post => post.id === action.payload.id);
      allPosts[index] = action.payload;

      return {
        ...state,
        allPosts,
        selectedPost: action.payload,
      };
    }

    case actionTypes.GET_POSTS_BY_CATEGORY:
      return { allPosts: action.payload.data, selectedCategory: action.payload.category };

    default:
      return state;
  }
};
