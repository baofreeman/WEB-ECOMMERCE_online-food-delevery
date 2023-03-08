import { collection, deleteDoc, doc, getDocs, orderBy, query, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

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
export const saveItem = async (data) => {
    await setDoc(doc(db, 'foodItems', `${Date.now()}`), data, {
        merge: true,
    });
};

// Getting Item
export const getAllFoodItems = async () => {
    const items = await getDocs(query(collection(db, 'foodItems'), orderBy('id', 'desc')));

    return items.docs.map((doc) => doc.data());
};

// Delete Item
export const deleteItem = async (data) => {
    await deleteDoc(doc(db, 'foodItems', `${Date.now()}`), data, {
        merge: true,
    });
};
