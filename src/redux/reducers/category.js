const initialState = {
  items: [],
  isLoaded: false,
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default category;
