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
                    className="flex w-full items-center justify-end gap-12 my-4 max-lg:gap-6 max-md:flex-col max-md:gap-10"
                >
                    <div className="max-md:w-full text-center max-md:flex">
                        <Button size={'linkSmall'} style={'linkBasic'} to={item.home.path}>
                            {item.home.display}
                        </Button>
                    </div>
                    <div className="max-md:w-full text-center max-md:flex">
                        <Button size={'linkSmall'} style={'linkBasic'} to={item.dashboard.path}>
                            {item.dashboard.display}
                        </Button>
                    </div>
                    <div className="max-md:w-full text-center hidden max-md:flex">
                        <Button size={'linkSmall'} style={'linkBasic'} to={item.order.path}>
                            {item.order.display}
                        </Button>
                    </div>
                    <div className="max-md:w-full text-center hidden max-md:flex">
                        <Button size={'linkSmall'} style={'linkBasic'} to={item.cart.path}>
                            {item.cart.display}
                        </Button>
                    </div>

                    {user ? (
                        <>
                            <UserUi />
                            <div className="hidden max-md:flex max-md:w-full text-center">
                                <Button size={'linkSmall'} style={'linkPrimary'} to={item.profile.path}>
                                    {item.profile.display}
                                </Button>
                            </div>
                            <div className="hidden max-md:flex max-md:w-full text-center">
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
                            <div className="max-md:w-full text-center max-md:flex">
                                <Button
                                    size={'max-md:' ? 'linkSmall' : 'linkSmallRounded'}
                                    style={`max-md:` ? 'linkPrimary' : 'linkPrimaryRounded'}
                                    to={item.signup.path}
                                >
                                    {item.signup.display}
                                </Button>
                            </div>
                            <div className="max-md:w-full text-center max-md:flex">
                                <Button
                                    size={'max-md:' ? 'linkSmall' : 'linkSmallRounded'}
                                    style={`max-md:` ? 'linkPrimary' : 'linkPrimaryRounded'}
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
