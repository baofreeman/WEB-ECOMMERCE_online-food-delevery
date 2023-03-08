import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { Await, useNavigate } from 'react-router-dom';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
} from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, doc, getDocs, getDoc, orderBy, query, setDoc, updateDoc } from 'firebase/firestore';
import { saveUser, getUser, updateUser } from '../data/dataUser';
import { auth, db } from '../firebase-config';
import { storage } from '../firebase-config';

/** Auth Context */

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            // res ? setUser(res) : setUser(null);
            if (res) {
                getUser(res.uid).then((user) => setUser(user));
            } else {
                setUser(null);
            }
            setError('');
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    console.log(user);
    // register
    const registerUser = (name, email, password, phoneNumber) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password, phoneNumber)
            .then((cred) => {
                // return setDoc(
                //     doc(db, 'user', `${cred.user.uid}`),
                //     {
                //         id: cred.user.uid,
                //         displayName: name,
                //         email: email,
                //         phoneNumber: phoneNumber,
                //     },
                //     {
                //         merge: true,
                //     },
                // );
                // return updateProfile(auth.currentUser, { displayName: name });
                const data = {
                    uid: cred.user.uid,
                    displayName: name,
                    email: email,
                    phoneNumber: phoneNumber,
                    photoURL: '',
                };
                saveUser(cred.user.uid, data);
            })
            .then(() => {
                console.log('Success');
                // navigate('/dashboard');
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    // login
    const signInUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // const user = res.user.providerData;
                // localStorage.setItem('user', JSON.stringify(user));
                console.log(res);
                // navigate('/dashboard');
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    //logout
    const logoutUser = () => {
        signOut(auth);
        localStorage.clear();
        navigate('/');
    };

    // forget password
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    // upload avatar
    const upload = async (file, currentUser) => {
        const fileRef = ref(storage, currentUser.uid + '.png');
        setLoading(true);
        const snapshot = await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
        updateProfile(auth.currentUser, { photoURL });
        updateUser(auth.currentUser.uid, { photoURL: photoURL });
        console.log(user.uid);
        setLoading(false);
        alert('thanh cong');
    };

    const contextValue = {
        user,
        loading,
        error,
        setError,
        registerUser,
        signInUser,
        logoutUser,
        forgetPassword,
        upload,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
