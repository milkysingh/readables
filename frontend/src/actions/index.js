import axios from 'axios';
import * as actionTypes from './actionTypes';
import { header } from '../utils/util';

export const getCategories = () => async (dispatch) => {
  const { data: { categories } } = await axios.get('http://localhost:3001/categories', header);
  dispatch({ type: actionTypes.GET_CATEGORIES, payload: categories });
};

export const getAllPosts = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:3001/posts', header);
  console.log(data);
  dispatch({ type: actionTypes.GET_ALL_POSTS, payload: data });
};

export const getPostDetail = pid => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3001/posts/${pid}`, header);

  dispatch({ type: actionTypes.SELECTED_POST, payload: data });
};

export const getComments = pid => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:3001/posts/${pid}/comments`, header);

  dispatch({ type: actionTypes.GET_COMMENTS, payload: data });
};
