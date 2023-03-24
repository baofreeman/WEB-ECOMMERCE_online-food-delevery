import { doc, setDoc, collection, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

// save order user firebase database
export const saveOrder = async (user, orderId, data) => {
    const docRef = doc(collection(db, 'orders'), `${user + orderId}`);
    await setDoc(docRef, data);
};

// save order user firebase database
export const deleteItem = async (user, orderId) => {
    const docRef = doc(collection(db, 'orders'), `${user + orderId}`);
    await deleteDoc(docRef);
};
