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
    deleteDoc,
    query,
    onSnapshot,
    where,
} from 'firebase/firestore';
import { db } from '../firebase.config';

export const saveOrder = async (user, orderId, data) => {
    const docRef = doc(collection(db, 'orders'), `${user + orderId}`);
    await setDoc(docRef, data);
};

export const deleteItem = async (user, orderId) => {
    const docRef = doc(collection(db, 'orders'), `${user + orderId}`);
    await deleteDoc(docRef);
};

// export const getOrder = async (user) => {
//     const items = await getDocs(query(collection(db, 'orders ' + user), orderBy('id', 'desc')));

//     return items.docs.map((doc) => doc.data());
// };
