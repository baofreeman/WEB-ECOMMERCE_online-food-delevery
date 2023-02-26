import { faHouse, faSackDollar } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import { useAuth } from '../../contexts';
import UserUi from './UserUi';

function MenuMobile() {
    const { user, logoutUser } = useAuth();
    const list = [
        {
            home: { path: '/', display: 'Home', icon: faHouse },
            login: { path: '/signin', display: 'Login', icon: faHouse },
            signup: { path: '/signup', display: 'Sign Up', icon: faHouse },
            dashboard: { path: '/dashboard', display: 'DashBoard', icon: faHouse },
            order: { path: '/dashboard/order', display: 'Order', icon: faSackDollar, qty: '1' },
            cart: { path: '/dashboard/add', display: 'Your Cart', icon: faSackDollar, qty: '0' },
        },
    ];

    return (
        <>
            {list.map((item, id) => (
                <div key={id} className="flex items-center justify-center text-base font-semibold text max-md:flex-col">
                    <div className="mx-8 max-md:w-full my-2 text-center max-md:flex">
                        <Button size={'linkMedium'} style={'linkBasic'} to={item.home.path}>
                            {item.home.display}
                        </Button>
                    </div>
                    <div className="mx-8 max-md:w-full my-2 text-center max-md:flex">
                        <Button size={'linkMedium'} style={'linkBasic'} to={item.dashboard.path}>
                            {item.dashboard.display}
                        </Button>
                    </div>
                    <div className="mx-8 max-md:w-full my-2 text-center hidden max-md:flex">
                        <Button size={'linkMedium'} style={'linkBasic'} to={item.order.path}>
                            {item.order.display}
                        </Button>
                    </div>
                    <div className="mx-8 max-md:w-full my-2 text-center hidden max-md:flex">
                        <Button size={'linkMedium'} style={'linkBasic'} to={item.cart.path}>
                            {item.cart.display}
                        </Button>
                    </div>

                    {user ? (
                        <>
                            <UserUi />
                            <div className="hidden max-md:flex mx-8 max-md:w-full my-2 text-center">
                                <Button size={'linkMedium'} style={'linkPrimary'} to={'/'} onClick={logoutUser}>
                                    Logout
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mx-8 max-md:w-full my-2 text-center max-md:flex">
                                <Button size={'linkSmallRounded'} style={'linkPrimary'} to={item.signup.path}>
                                    {item.signup.display}
                                </Button>
                            </div>
                            <div className="ml-8 max-md:w-full my-2 text-center max-md:flex">
                                <Button size={'linkSmallRounded'} style={'linkPrimary'} to={item.login.path}>
                                    {item.login.display}
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </>
    );
}

export default MenuMobile;
