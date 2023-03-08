import { doc, setDoc, getDoc, updateDoc, addDoc, collection, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase-config';

//Save User
export const saveUser = async (user, data) => {
    await setDoc(doc(collection(db, 'user'), `${user}`), data);
};

//Get User
export const getUser = async (user) => {
    const docRef = doc(db, 'user', `${user}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        return docSnap.data();
        // return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
    }
};

//Update User
export const updateUser = async (user, data) => {
    const docRef = doc(db, 'user', `${user}`);
    await updateDoc(docRef, data);
};
