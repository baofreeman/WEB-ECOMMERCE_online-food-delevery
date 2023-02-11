import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyDbQ8FCw3s4ie78yXXnsvGRjhZjegUSnIc',
    authDomain: 'food-e1904.firebaseapp.com',
    projectId: 'food-e1904',
    storageBucket: 'food-e1904.appspot.com',
    messagingSenderId: '98966294824',
    appId: '1:98966294824:web:3a20f28dcc7205b7ed801d',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
