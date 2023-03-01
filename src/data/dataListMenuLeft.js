import { faFolder, faHouse, faSackDollar, faStore, faUser } from '@fortawesome/free-solid-svg-icons';

export const dataListMenuLeft = [
    { path: '/', display: 'Home', icon: faHouse },
    { path: '/dashboard', display: 'DashBoard', icon: faStore },
    { path: '/dashboard/profile', display: 'Profile', icon: faUser },
    { path: '/dashboard/order', display: 'Order', icon: faFolder, module: '1' },
    { path: '/dashboard/add', display: 'Your Cart', icon: faSackDollar, module: '0' },
];
