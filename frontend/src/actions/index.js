import axios from 'axios';
import * as actionTypes from './actionTypes';
import { header } from '../utils/util';

const URL = 'http://localhost:3001/';
export const getCategories = () => async (dispatch) => {
  const { data: { categories } } = await axios.get(`${URL}categories`, header);
  dispatch({ type: actionTypes.GET_CATEGORIES, payload: categories });
};

export const getAllPosts = () => async (dispatch) => {
  const { data } = await axios.get(`${URL}posts`, header);
  console.log(data);
  dispatch({ type: actionTypes.GET_ALL_POSTS, payload: data });
};

export const getPostDetail = pid => async (dispatch) => {
  const { data } = await axios.get(`${URL}posts/${pid}`, header);

  dispatch({ type: actionTypes.SELECTED_POST, payload: data });
};

export const getComments = pid => async (dispatch) => {
  const { data } = await axios.get(`${URL}posts/${pid}/comments`, header);

  dispatch({ type: actionTypes.GET_COMMENTS, payload: data });
};

export const setPostVotes = (pid, option) => async (dispatch) => {
  const { data } = await axios.post(`${URL}posts/${pid}`, { option }, header);

  dispatch({ type: actionTypes.SET_VOTE, payload: data });
};

export const getPostsByCategory = category => async (dispatch) => {
  const { data } = await axios.get(`${URL}${category}/posts`, header);

  dispatch({ type: actionTypes.GET_POSTS_BY_CATEGORY, payload: { data, category } });
};
