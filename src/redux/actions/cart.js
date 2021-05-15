export const addProductsToCart = (productsObj) => ({
  type: 'ADD_PRODUCTS_CART',
  payload: productsObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const plusCartCountColor = (id) => ({
  type: 'PLUS_CART_COUNT_COLOR',
  payload: id,
});

export const minusCartCountColor = (id) => ({
  type: 'MINUS_CART_COUNT_COLOR',
  payload: id,
});