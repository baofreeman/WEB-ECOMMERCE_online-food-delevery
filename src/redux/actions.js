export const setFoods = (product) => {
    return {
        type: 'set_foods',
        payload: product,
    };
};

export const addCart = (product) => {
    return {
        type: 'add_cart',
        payload: product,
    };
};

export const removeInt = (product) => {
    return {
        type: 'remove_int',
        payload: product,
    };
};
export const removeItem = (product, i) => {
    return {
        type: 'remove_item',
        payload: { product, i },
    };
};

export const resetStore = (product) => {
    return {
        type: 'reset_store',
        payload: { product },
    };
};
