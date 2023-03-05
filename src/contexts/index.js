import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
} from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, doc, getDocs, orderBy, query, setDoc, updateDoc } from 'firebase/firestore';

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
            res ? setUser(res) : setUser(null);
            setError('');
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // register
    const registerUser = (name, email, password, phoneNumber) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password, phoneNumber)
            .then((userCredential) => {
                console.log(userCredential);
                return updateProfile(auth.currentUser, { displayName: name });
            })
            .then((res) => {
                setDoc(
                    doc(db, 'user', `${auth.currentUser.uid}`),
                    {
                        name: auth.currentUser.displayName,
                        email: auth.currentUser.email,
                        phone: auth.currentUser.phoneNumber,
                        photoURL: auth.currentUser.photoURL,
                    },
                    {
                        merge: true,
                    },
                );
                console.log(res);
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
        const userDb = doc(db, 'user', `${auth.currentUser.uid}`);
        updateDoc(userDb, { photoURL: photoURL });
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
