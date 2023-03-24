import { ADD_CART, REMOVE_ITEM, REMOVE_INT, RESET_STORE, SET_fOODS } from './type';

// Get cart LocalStorage and set InitValue Store Redux
const getDataStorage = () => {
    let newData = localStorage.getItem('cart');
    if (newData === []) {
        return [];
    } else if (newData === null) {
        return [];
    } else {
        const dataCart = JSON.parse(newData);
        return dataCart;
    }
};

// Get Qty LocalStorage and set InitValue Store Redux
const getQtyStorage = () => {
    let newQty = localStorage.getItem('qty');
    if (newQty === 0) {
        return 0;
    } else if (newQty === null) {
        return 0;
    } else {
        const dataQty = JSON.parse(newQty);
        return dataQty;
    }
};

const initialStore = {
    carts: getDataStorage(),
    totalQty: getQtyStorage(),
    foodItems: [], // All products for Firebase
};

export const cartReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_fOODS:
            return {
                ...state,
                foodItems: [...action.payload],
            };
        case ADD_CART:
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                const incre = (state.carts[itemIndex].qty += 1); // increment qty
                const increTotalQty = state.totalQty++; // increment total qty
                return {
                    ...state,
                    carts: [...state.carts],
                };
            } else {
                const temp = { ...action.payload, qty: 1 }; // set qty = 1 if dispatch qty = 0
                const total = (state.totalQty += temp.qty); // set total
                return {
                    ...state,
                    carts: [...state.carts, temp],
                    totalQty: total,
                };
            }

        case REMOVE_INT:
            const itemIndex_desc = state.carts.findIndex((item) => item.id === action.payload.id);
            // derement product > 1
            if (state.carts[itemIndex_desc].qty > 1) {
                const delete_item = (state.carts[itemIndex_desc].qty -= 1);
                const total = (state.totalQty -= 1);
                return {
                    ...state,
                    carts: [...state.carts],
                    totalQty: total,
                };

                // remove product === 1
            } else if (state.carts[itemIndex_desc].qty === 1) {
                const newItems = [...state.carts];
                newItems.splice(action.payload, 1);
                let total = (state.totalQty -= state.carts[itemIndex_desc].qty);
                return {
                    ...state,
                    carts: newItems,
                    totalQty: total,
                };
            }

        // remove product
        case REMOVE_ITEM:
            const itemIndex_remove = state.carts.findIndex((item) => item.id === action.payload.product.id);
            const newItems = [...state.carts];
            newItems.splice(action.payload.i, 1);
            // console.log(itemIndex_remove, action.payload);
            let total = state.totalQty;
            total = state.totalQty -= state.carts[itemIndex_remove].qty;
            return {
                ...state,
                carts: newItems,
                totalQty: total,
            };

        // reset Store
        case RESET_STORE:
            return {
                ...state,
                carts: [],
                totalQty: 0,
            };

        default:
            return state;
    }
};
