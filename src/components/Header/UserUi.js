import Button from '../Button';
import { useAuth } from '../../contexts';
import { useState } from 'react';

function UserUi() {
    const { user, logoutUser } = useAuth();
    const [toggleUser, setToggleUser] = useState(false);

    return (
        <>
            <div className="sm:hidden ml-8 flex justify-end relative" onClick={() => setToggleUser((prev) => !prev)}>
                <img
                    src={user.photoURL ? user.photoURL : 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'}
                    alt="avatar"
                    className="rounded-full w-16 h-16 p-1 bg-white border border-regal-yellow"
                />
                {toggleUser ? (
                    <div className="absolute top-20 right-0 bg-regal-yellow-500 flex flex-col min-w-fit h-32 px-4 items-center justify-between rounded-md">
                        <div className="flex flex-col h-full items-center justify-between py-4">
                            <h1 className="text-black text-sm font-light select-none">{user.displayName}</h1>
                            <h1 className="text-black text-sm font-light select-none">{user.email}</h1>
                            <Button size={'buttonSmall'} style={'buttonBasic'} onClick={logoutUser}>
                                Logout
                            </Button>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
}

export default UserUi;
