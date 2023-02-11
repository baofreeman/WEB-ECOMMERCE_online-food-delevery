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
