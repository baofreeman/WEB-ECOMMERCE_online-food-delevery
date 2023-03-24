import { doc, setDoc, getDoc, updateDoc, collection, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

//Save User
export const saveUser = async (user, data) => {
    await setDoc(doc(collection(db, 'users'), `${user}`), data);
};

//Get User
export const getUser = async (user) => {
    const docRef = doc(db, 'users', `${user}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log('Document data:', docSnap.data());
        return docSnap.data();
    } else {
        console.log('No such document!');
    }
};

//Update User
export const updateUser = async (user, data) => {
    const docRef = doc(db, 'users', `${user}`);
    await updateDoc(docRef, data);
};

export const deleteItem = async (user) => {
    const docRef = doc(collection(db, 'users'), `${user}`);
    await deleteDoc(docRef);
};
