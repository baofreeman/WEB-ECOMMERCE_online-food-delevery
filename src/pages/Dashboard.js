import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Sidebar } from '../utils';
import { Content } from '../utils';
import { setFoods } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { db } from '../firebase.config';
import { collection, onSnapshot } from 'firebase/firestore';

function Dashboard() {
    const getFoods = useSelector((state) => state.cartReducer.foodItems);
    const dispatch = useDispatch();

    useEffect(() => {
        const q = collection(db, 'foodItems');
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const item = querySnapshot.docs.map((doc) => doc.data());
            dispatch(setFoods(item));
        });
        return unsubscribe;
    }, []);

    return (
        <div className="flex h-screen sm:h-full sm:mt-[62px]">
            <Sidebar />
            <Content data={getFoods} />
            <Outlet context={getFoods} />
        </div>
    );
}
export default Dashboard;
