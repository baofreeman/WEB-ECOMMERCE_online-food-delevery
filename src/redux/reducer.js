import { ADD_CART, REMOVE_ITEM, REMOVE_INT } from './type';

const initialStore = {
    carts: [],
};

export const cartReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_CART:
            // return {
            //     ...state,
            //     carts: [...state.carts, action.payload],
            // };
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                const decre = (state.carts[itemIndex].qty += 1);
                return {
                    ...state,
                    carts: [...state.carts],
                };
            } else {
                const temp = { ...action.payload, qty: 1 };
                return {
                    ...state,
                    carts: [...state.carts, temp],
                };
            }

        case REMOVE_ITEM:
            const newItems = [...state.carts];
            newItems.splice(action.payload, 1);
            return {
                ...state,
                carts: newItems,
            };

        case REMOVE_INT:
            const itemIndex_desc = state.carts.findIndex((item) => item.id === action.payload.id);
            if (state.carts[itemIndex_desc].qty >= 1) {
                const delete_item = (state.carts[itemIndex_desc].qty -= 1);
                return {
                    ...state,
                    carts: [...state.carts],
                };
            } else if (state.carts[itemIndex_desc].qty === 1) {
                const newItems = [...state.carts];
                newItems.splice(action.payload, 1);
                return {
                    ...state,
                    carts: newItems,
                };
            }

        default:
            return state;
    }
};
