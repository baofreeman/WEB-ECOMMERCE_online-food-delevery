import { faFolder, faHouse, faSackDollar, faStore, faUser } from '@fortawesome/free-solid-svg-icons';

export const dataListMenu = [
    {
        home: { path: '/', display: 'Home', icon: faHouse },
        login: { path: '/login', display: 'Login', icon: faHouse },
        signup: { path: '/signup', display: 'Sign Up', icon: faHouse },
        dashboard: { path: '/dashboard', display: 'DashBoard', icon: faHouse },
        order: { path: '/dashboard/order', display: 'Order', icon: faSackDollar, qty: '1' },
        cart: { path: '/dashboard/add', display: 'Your Cart', icon: faSackDollar, qty: '0' },
        profile: { path: '/dashboard/profile', display: 'Profile', icon: faSackDollar },
        logout: { path: '/', display: 'Logout', icon: faSackDollar },
    },
];
