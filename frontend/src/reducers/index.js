import { combineReducers } from 'redux';
import PostReducer from './posts';
import CategoryReducer from './categories';
import CommentReducer from './comments';

export default combineReducers({
  posts: PostReducer,
  category: CategoryReducer,
  comments: CommentReducer,
});
