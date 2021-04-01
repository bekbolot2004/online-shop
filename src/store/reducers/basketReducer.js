import {
    ADD_PROD_TO_BASKET,
    REMOVE_PROD_FROM_BASKET,
} from "../actionTypes";
import {act} from "@testing-library/react";

const initialState = {
    basket: [],
};

export default function basketReducer(state = initialState, action) {
    const currentProd = state.basket.some(p => action.data.id === p.id)
    switch (action.type) {
        case ADD_PROD_TO_BASKET:
            return {
                ...state,
                basket: currentProd ?
                    state.basket.map(p => p.id === action.data.id ?
                        { ...p, count: (p.count + action.data.count)} :
                        p
                    ) :
                    [action.data, ...state.basket]
                ,
            };
        case REMOVE_PROD_FROM_BASKET:
            return {
                ...state,
                basket: state.basket.filter(p => p.id !== action.id),
            };
        default:
            return state;
    }
}
