import { faBars, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { image3 } from '../../assets/images';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useState } from 'react';
import { useAuth } from '../../contexts';
import MenuLeft from './MenuLeft';

function Sidebar({ isAdd }) {
    const [navbar, setNavbar] = useState(false);
    const { user } = useAuth();

    const nav = [
        { path: '/', display: 'Home' },
        { path: '/dashboard', display: 'DashBoard' },
        { path: '/dashboard/profile', display: 'Profile' },
        { path: '/dashboard/order', display: 'Order', module: '1' },
        { path: '/dashboard/add', display: 'Your Cart', module: '0' },
    ];
    const getData = useSelector((state) => state.cartReducer.carts);
    const getQty = useSelector((state) => state.cartReducer.totalQty);

    return (
        <>
            <MenuLeft />
            <div className="hidden z-10 max-md:flex w-full bg-regal-green fixed top-0 h-16 items-center justify-between">
                <NavLink to={'/dashboard/add'}>
                    <FontAwesomeIcon icon={faSackDollar} className="ml-4 px-2 py-2 text-2xl text-regal-yellow z-10" />
                    <span className="bg-regal-yellow-500 rounded-full absolute top-3 left-9 w-5 h-5 text-regal-green flex items-center justify-center text-sm font-bold">
                        {getQty}
                    </span>
                </NavLink>

                <FontAwesomeIcon
                    icon={faBars}
                    className="mr-4 px-2 py-2 text-2xl text-regal-yellow"
                    onClick={() => setNavbar(!navbar)}
                />
            </div>
            {navbar ? (
                <section className="w-full absolute min-h-fit bg-regal-green-500 text-white top-16 z-10 flex flex-col items-center justify-around">
                    {nav.map((item, id) => {
                        return (
                            <li
                                key={id}
                                className="w-full flex items-center justify-center py-6"
                                onClick={() => setNavbar(!navbar)}
                            >
                                <NavLink to={item.path} className="flex-1 text-center">
                                    <span className="w-full text-base font-semibold">{item.display}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </section>
            ) : null}
        </>
    );
}

export default Sidebar;
