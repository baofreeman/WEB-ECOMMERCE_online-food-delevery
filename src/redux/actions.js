export const addCart = (item) => {
    return {
        type: 'add_cart',
        payload: item,
    };
};

export const removeInt = (item) => {
    return {
        type: 'remove_int',
        payload: item,
    };
};
export const removeItem = (id) => {
    return {
        type: 'remove_item',
        payload: id,
    };
};

export const increment = (item) => {
    return {
        type: 'REMOVE_ITEM',
        payload: item,
    };
};
