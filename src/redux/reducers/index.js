import { combineReducers } from 'redux';

import filters from './filters';
import products from './products';
import cart from './cart';
import category from './category';

const rootReducer = combineReducers({
  filters,
  products,
  cart,
  category,
});

export default rootReducer;
