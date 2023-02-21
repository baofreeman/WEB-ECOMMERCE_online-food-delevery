import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Sidebar from '../../utils/Sidebar/Sidebar';
import Content from '../../utils/Content/Content';
import Header from '../../components/Header';

function Dashboard() {
    const getData = useSelector((state) => state.cartReducer.carts);
    const getQty = useSelector((state) => state.cartReducer.totalQty);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(getData));
        localStorage.setItem('qty', JSON.stringify(getQty));
    }, [getQty]);

    return (
        <div className="flex h-screen">
            <Sidebar />
            <Content />
            <Outlet />
        </div>
    );
}
export default Dashboard;
