import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';

import { Sidebar } from '../utils';
import { setFoods } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { db } from '../firebase.config';
import { collection, onSnapshot } from 'firebase/firestore';

import Loader from '../components/Loader';

const Content = lazy(() => import('../utils/Content/Content'));
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
        <div className="flex h-screen sm:mt-[62px]">
            <Sidebar />
            <Suspense fallback={<Loader />}>
                <Content data={getFoods} />
            </Suspense>
            <Outlet context={getFoods} />
        </div>
    );
}
export default Dashboard;
