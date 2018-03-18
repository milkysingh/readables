import { combineReducers } from 'redux';
import PostReducer from './posts';
import CategoryReducer from './categories';

export default combineReducers({
  posts: PostReducer,
  category: CategoryReducer,
});
