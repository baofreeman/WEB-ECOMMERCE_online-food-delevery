import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';

import Sidebar from '../../utils/Sidebar/Sidebar';
import { getAllFoodItems } from '../../data/dataProducts';
import { setFoods } from '../../redux/actions';
import { useDispatch } from 'react-redux';

import Content from '../../utils/Content/Content';
import Loader from '../../components/Loader';
// import Product from '../../utils/Content/Product';

// const Product = lazy(() => import('../../utils/Content/Product'));
function Dashboard() {
    const getData = useSelector((state) => state.cartReducer.carts);
    const getQty = useSelector((state) => state.cartReducer.totalQty);
    const getFoods = useSelector((state) => state.cartReducer.foodItems);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(getData));
    //     localStorage.setItem('qty', JSON.stringify(getQty));
    // }, [getQty]);
    // console.log(getData);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllFoodItems();
            return data;
        };
        fetchData()
            .then((data) => {
                dispatch(setFoods(data));
                console.log(data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }, []);

    return (
        <div className="flex h-screen max-md:mt-[80px]">
            <Sidebar />
            <Content data={getFoods} />
            <Outlet context={getFoods} />
        </div>
    );
}
export default Dashboard;
