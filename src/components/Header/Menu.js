import { faHouse, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import Button from '../Button';
import { useAuth } from '../../contexts';
import { dataListMenu } from '../../data/dataListMenu';
import UserUi from './UserUi';

function MenuMobile() {
    const { user, logoutUser } = useAuth();

    return (
        <>
            {dataListMenu.map((item, id) => (
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 200 }}
                    key={id}
                    className="flex w-full items-center justify-end gap-12 my-4 md:gap-6 sm:flex-col sm:gap-10"
                >
                    <div className="sm:w-full text-center sm:flex">
                        <Button size={'linkSmall'} style={'linkBasic'} to={item.home.path}>
                            {item.home.display}
                        </Button>
                    </div>
                    <div className="sm:w-full text-center sm:flex">
                        <Button size={'linkSmall'} style={'linkBasic'} to={item.dashboard.path}>
                            {item.dashboard.display}
                        </Button>
                    </div>
                    <div className="sm:w-full text-center hidden sm:flex">
                        <Button size={'linkSmall'} style={'linkBasic'} to={item.order.path}>
                            {item.order.display}
                        </Button>
                    </div>
                    <div className="sm:w-full text-center hidden sm:flex">
                        <Button size={'linkSmall'} style={'linkBasic'} to={item.cart.path}>
                            {item.cart.display}
                        </Button>
                    </div>

                    {user ? (
                        <>
                            <UserUi />
                            <div className="hidden sm:flex sm:w-full text-center">
                                <Button size={'linkSmall'} style={'linkPrimary'} to={item.profile.path}>
                                    {item.profile.display}
                                </Button>
                            </div>
                            <div className="hidden sm:flex sm:w-full text-center">
                                <Button
                                    size={'linkSmall'}
                                    style={'linkPrimary'}
                                    to={item.logout.path}
                                    onClick={logoutUser}
                                >
                                    {item.logout.display}
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="sm:w-full text-center sm:flex">
                                <Button
                                    size={'sm:' ? 'linkSmall' : 'linkSmallRounded'}
                                    style={`sm:` ? 'linkPrimary' : 'linkPrimaryRounded'}
                                    to={item.signup.path}
                                >
                                    {item.signup.display}
                                </Button>
                            </div>
                            <div className="sm:w-full text-center sm:flex">
                                <Button
                                    size={'sm:' ? 'linkSmall' : 'linkSmallRounded'}
                                    style={`sm:` ? 'linkPrimary' : 'linkPrimaryRounded'}
                                    to={item.login.path}
                                >
                                    {item.login.display}
                                </Button>
                            </div>
                        </>
                    )}
                </motion.div>
            ))}
        </>
    );
}

export default MenuMobile;
