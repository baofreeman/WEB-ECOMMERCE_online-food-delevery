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
import { auth } from '../firebase-config';
import { storage } from '../firebase-config';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            res ? setUser(res) : setUser(null);
            setError('');
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const registerUser = (name, email, password, phone) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password, phone)
            .then(() => {
                return updateProfile(auth.currentUser, { displayName: name });
            })
            .then((res) => {
                console.log(res);
                navigate('/dashboard');
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    const signInUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res);
                navigate('/dashboard');
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    const logoutUser = () => {
        signOut(auth);

        navigate('/');
    };

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    async function upload(file, currentUser) {
        const fileRef = ref(storage, currentUser.uid + '.png');
        setLoading(true);
        const snapshot = await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
        updateProfile(auth.currentUser, { photoURL });
        setLoading(false);
        alert('thanh cong');
    }

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
