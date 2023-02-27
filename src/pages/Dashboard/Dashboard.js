import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Sidebar from '../../utils/Sidebar/Sidebar';
import { getAllFoodItems } from '../../data/dataProducts';
import { setFoods } from '../../redux/actions';
import { useDispatch } from 'react-redux';

import Content from '../../utils/Content/Content';

function Dashboard() {
    const getData = useSelector((state) => state.cartReducer.carts);
    const getQty = useSelector((state) => state.cartReducer.totalQty);
    const getFoods = useSelector((state) => state.cartReducer.foodItems);
    const dispatch = useDispatch();
    const fetchData = async () => {
        let data = await getAllFoodItems();
        return data;
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(getData));
        localStorage.setItem('qty', JSON.stringify(getQty));
        fetchData().then((data) => {
            dispatch(setFoods(data));
        });
    }, [getQty]);

    console.log(getFoods, getData, getQty);

    return (
        <div className="flex h-screen">
            <Sidebar />
            <Content data={getFoods} />
            <Outlet context={getFoods} />
        </div>
    );
}
export default Dashboard;
