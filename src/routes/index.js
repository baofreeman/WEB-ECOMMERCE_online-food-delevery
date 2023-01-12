//Pages
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Logger from '../pages/Logger';
const publicRouters = [
    { path: '/', component: Home },
    { path: '/log', component: Logger },
    // { path: '/signup', component: SignUp },
    { path: '/dashboard', component: Dashboard },
];

const privateRouters = [];

export { publicRouters, privateRouters };
