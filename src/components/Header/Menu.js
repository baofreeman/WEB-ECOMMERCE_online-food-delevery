import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import { useAuth } from '../../contexts';
import { useContextProfile } from '../../pages/Home';

function Menu() {
    const navigate = useNavigate();
    const { loading, user, logoutUser } = useAuth();
    const toggle = useContext(useContextProfile);
    const handleSetProfile = () => {
        toggle.setProfile(!toggle.profile);
    };

    return (
        <>
            <Button size={'mA'} style={'basicA'} href="/">
                Home
            </Button>
            <Button
                size={'mA'}
                style={'basicA'}
                to={'/dashboard'}
                onClick={() => {
                    navigate('/', { replace: true });
                }}
            >
                Dashboard
            </Button>

            {user ? (
                <>
                    <div className="relative" onClick={handleSetProfile}>
                        <img
                            src={
                                user.photoURL
                                    ? user.photoURL
                                    : 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'
                            }
                            alt="avatar"
                            className="rounded-full w-16 h-16 p-1 bg-white border border-regal-yellow"
                        />
                        {toggle.profile ? (
                            <div className="absolute top-20 right-0 w-max h-40 bg-regal-white-200 py-4 px-2 rounded-md before:absolute before:bg-black before:border-solid before:border-black before:border-t-transparent before:border-l-8 before:border-r-8 before:border-b-8 before:top-0 before:z-23">
                                <div className="flex flex-col h-full items-center justify-between">
                                    <h1 className="text-black text-sm font-medium select-none">{user.displayName}</h1>
                                    <h1 className="text-black text-sm font-medium select-none">{user.email}</h1>
                                    <Button size={'smF'} style={'primary'} onClick={logoutUser}>
                                        Logout
                                    </Button>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </>
            ) : (
                <>
                    <Button size={'mA'} style={'primaryB'} to={'/signup'}>
                        Login
                    </Button>
                    <Button size={'mA'} style={'primaryB'} to={'/signin'}>
                        Sign up
                    </Button>
                </>
            )}
        </>
    );
}

export default Menu;
