import axios from 'axios';
import {apiAdress} from "../../api";

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});



export const fetchProducts = (category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });


  // if(category !== undefined) {
  //   alert(`${apiAdress}product/${category}`)
  // }

  const cat =  category !== undefined ? `?category=${category}` : ""

  axios
      .get(
          `${apiAdress}product/${cat}`,
      )
      .then(({ data }) => {
        dispatch(setProducts(data));
      });
};

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
});
