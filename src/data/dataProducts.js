import { image4 } from '../assets/images';

import { collection, doc, getDocs, orderBy, query, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

export const products = [
    {
        id: 1,
        name: 'Stir Fry Pasta Stir Fry Pasta Stir Fry Pasta Stir Fry Pasta',
        des: 'The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef The in-house pasta and chicken by chef',
        price: '120000',
        img: image4,
    },
    {
        id: 2,
        name: 'Stir Fry Pasta',
        des: 'The in-house pasta and chicken by chef Moose',
        price: '103000',
        img: image4,
    },
    {
        id: 3,
        name: 'Stir Fry Pasta',
        des: 'The in-house pasta and chicken by chef Moose',
        price: '101000',
        img: image4,
    },
    {
        id: 4,
        name: 'Stir Fry Pasta',
        des: 'The in-house pasta and chicken by chef Moose',
        price: '100000',
        img: image4,
    },
    {
        id: 5,
        name: 'Stir Fry Pasta',
        des: 'The in-house pasta and chicken by chef Moose',
        price: '100000',
        img: image4,
    },
    {
        id: 6,
        name: 'Stir Fry Pasta',
        des: 'The in-house pasta and chicken by chef Moose',
        price: '100000',
        img: image4,
    },
    {
        id: 7,
        name: 'Stir Fry Pasta',
        des: 'The in-house pasta and chicken by chef Moose',
        price: '100000',
        img: image4,
    },
    {
        id: 8,
        name: 'Stir Fry Pasta',
        des: 'The in-house pasta and chicken by chef Moose',
        price: '100000',
        img: image4,
    },
    {
        id: 9,
        name: 'Stir Fry Pasta',
        des: 'The in-house pasta and chicken by chef Moose',
        price: '100000',
        img: image4,
    },
    {
        id: 10,
        name: 'Stir Fry Pasta',
        des: 'The in-house pasta and chicken by chef Moose',
        price: '100000',
        img: image4,
    },
    {
        id: 11,
        name: 'Stir Fry Pasta',
        des: 'The in-house pasta and chicken by chef Moose',
        price: '100000',
        img: image4,
    },
];

export const categories = [
    {
        id: 1,
        name: 'Burgers',
        urlParamName: 'burgers',
    },
    {
        id: 2,
        name: 'Pizzas',
        urlParamName: 'pizzas',
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
];

// Saving new Item
export const saveItem = async (data) => {
    await setDoc(doc(db, 'foodItems', `${Date.now()}`), data, {
        merge: true,
    });
};

export const getAllFoodItems = async () => {
    const items = await getDocs(query(collection(db, 'foodItems'), orderBy('id', 'desc')));

    return items.docs.map((doc) => doc.data());
};
