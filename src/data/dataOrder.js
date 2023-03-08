import {
    doc,
    setDoc,
    getDocs,
    getDoc,
    updateDoc,
    addDoc,
    collection,
    arrayUnion,
    orderBy,
    query,
} from 'firebase/firestore';
import { db } from '../firebase-config';

export const saveOrder = async (user, data) => {
    await setDoc(doc(collection(db, 'orders ' + user)), data);
};

export const getOrder = async (user) => {
    const items = await getDocs(query(collection(db, 'orders ' + user), orderBy('id', 'desc')));

    return items.docs.map((doc) => doc.data());
};
