import Button from '../../Button';
import { useAuth } from '../../../contexts';
import { useState } from 'react';

function UserPc() {
    const { user, logoutUser } = useAuth();
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div className="max-md:hidden flex justify-end relative" onClick={() => setToggle(!toggle)}>
                <img
                    src={user.photoURL ? user.photoURL : 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'}
                    alt="avatar"
                    className="rounded-full w-16 h-16 p-1 bg-white border border-regal-yellow"
                />
                {toggle ? (
                    <div className="absolute top-20 right-0 bg-regal-yellow-500 flex flex-col min-w-fit h-36 px-4 items-center justify-between rounded-md transition-all ease-in duration-500">
                        <div className="flex flex-col h-full items-center justify-between py-4">
                            <h1 className="text-black text-sm font-medium select-none">{user.displayName}</h1>
                            <h1 className="text-black text-sm font-medium select-none">{user.email}</h1>
                            <Button size={'buttonSmall'} style={'buttonBasic'} onClick={logoutUser}>
                                Logout
                            </Button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default UserPc;
