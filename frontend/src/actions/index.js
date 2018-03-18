import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getCategories = () => async (dispatch) => {
  const { data: { categories } } = await axios.get('http://localhost:3001/categories', {
    headers: { Authorization: 'whatever-you-want' },
    credentials: 'include',
  });

  console.log(categories);
  dispatch({ type: actionTypes.GET_CATEGORIES, payload: categories });
};
