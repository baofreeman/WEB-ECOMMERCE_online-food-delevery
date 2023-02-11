import { ADD_CART, REMOVE_ITEM, REMOVE_INT } from './type';

const initialStore = {
    carts: [],
    totalQty: 0,
};

export const cartReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_CART:
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                const incre = (state.carts[itemIndex].qty += 1);
                const increTotalQty = state.totalQty++;
                return {
                    ...state,
                    carts: [...state.carts],
                };
            } else {
                const temp = { ...action.payload, qty: 1 };
                const total = (state.totalQty += temp.qty);
                return {
                    carts: [...state.carts, temp],
                    totalQty: total,
                };
            }

        case REMOVE_INT:
            const itemIndex_desc = state.carts.findIndex((item) => item.id === action.payload.id);
            if (state.carts[itemIndex_desc].qty > 1) {
                const delete_item = (state.carts[itemIndex_desc].qty -= 1);
                const total = (state.totalQty -= 1);
                return {
                    carts: [...state.carts],
                    totalQty: total,
                };
            } else if (state.carts[itemIndex_desc].qty === 1) {
                const newItems = [...state.carts];
                newItems.splice(action.payload, 1);
                let total = (state.totalQty -= state.carts[itemIndex_desc].qty);
                return {
                    carts: newItems,
                    totalQty: total,
                };
            }

        case REMOVE_ITEM:
            const itemIndex_remove = state.carts.findIndex((item) => item.id === action.payload.product.id);
            const newItems = [...state.carts];
            newItems.splice(action.payload.i, 1);
            console.log(itemIndex_remove, action.payload);
            let total = state.totalQty;
            total = state.totalQty -= state.carts[itemIndex_remove].qty;
            return {
                carts: newItems,
                totalQty: total,
            };

        default:
            return state;
    }
};
