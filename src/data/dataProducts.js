import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore';

import { db } from '../firebase.config';

export const categories = [
    {
        id: 1,
        name: 'Burgers',
        urlParamName: 'burgers',
    },
    {
        id: 2,
        name: 'Desserts',
        urlParamName: 'desserts',
    },
    {
        id: 3,
        name: 'Salads',
        urlParamName: 'salads',
    },
    {
        id: 4,
        name: 'Soft Drinks',
        urlParamName: 'drinks',
    },
    {
        id: 5,
        name: 'Bowls',
        urlParamName: 'bowls',
    },
    {
        id: 6,
        name: 'Kids Menu',
        urlParamName: 'kidsMenu',
    },
    {
        id: 7,
        name: 'Family',
        urlParamName: 'family',
    },
];

// Saving new Item
export const saveItem = async (id, data) => {
    const docRef = doc(collection(db, 'foodItems'), `${id}`);
    await setDoc(docRef, data);
};

// Delete Item
export const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'foodItems', id));
};
