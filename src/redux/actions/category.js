import axios from 'axios';
import {apiAdress} from "../../api";

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchCategory = (category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
    .get(
      `${apiAdress}category/`,
    )
    .then(({ data }) => {
      dispatch(setCategory(data));
    });
};

export const setCategory = (items) => ({
  type: 'SET_CATEGORY',
  payload: items,
});
