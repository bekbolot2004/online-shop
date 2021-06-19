const initialState = {
    items: {},
    totalPrice: 0,
    totalItems: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

// const basket = window.localStorage.getItem("basket")


const cart = (state = initialState, action) => {


    switch (action.type) {


        case 'ADD_PRODUCTS_CART': {
            const currentProductsItems =
                [action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    item: currentProductsItems,
                    totalPrice: getTotalPrice(currentProductsItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items,
            };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalItems: state.totalItems - currentTotalCount,
            };
        }

        case 'PLUS_CART_COUNT_COLOR': {

            return {
                ...state,
                colors:[...state.colors,action.payload]

            };
        }


        case 'CLEAR_CART':
            return {totalPrice: 0, totalCount: 0, items: {}};

        default:
            return state;
    }
};

export default cart;
