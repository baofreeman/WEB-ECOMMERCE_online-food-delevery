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
import { saveUser, getUser, updateUser } from '../data/dataUsers';
import { auth } from '../firebase.config';
import { storage } from '../firebase.config';

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
            if (res) {
                getUser(res.uid).then((user) => setUser(user)); // get user database
            } else {
                setUser(null);
            }
            setError('');
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    // console.log(user);

    // register
    const registerUser = (name, email, password, phoneNumber) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                const data = {
                    uid: cred.user.uid,
                    displayName: name,
                    email: email,
                    phoneNumber: phoneNumber,
                    photoURL: '',
                };
                saveUser(cred.user.uid, data); // set user database
            })
            .then(() => {
                console.log('Success');
                navigate('/dashboard');
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    // login
    const signInUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // console.log(res);
                navigate('/dashboard');
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
        const fileRef = ref(storage, `ImagesUsers/${currentUser.uid}.png`);
        setLoading(true);
        const snapshot = await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
        updateProfile(auth.currentUser, { photoURL });
        updateUser(auth.currentUser.uid, { photoURL: photoURL });
        setLoading(false);
        alert('Upload Succsess');
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
