import { faFolder, faHouse, faSackDollar, faStore } from '@fortawesome/free-solid-svg-icons';

export const dataListMenu = [
    {
        home: { path: '/', display: 'Home', icon: faHouse },
        login: { path: '/login', display: 'Login' },
        signup: { path: '/signup', display: 'Sign Up' },
        dashboard: { path: '/dashboard', display: 'DashBoard', icon: faStore },
        order: { path: '/dashboard/order', display: 'Order', icon: faFolder, qty: '1' },
        cart: { path: '/dashboard/add', display: 'Your Cart', icon: faSackDollar, qty: '0' },
        profile: { path: '/dashboard/profile', display: 'Profile' },
        logout: { path: '/', display: 'Logout' },
    },
];
