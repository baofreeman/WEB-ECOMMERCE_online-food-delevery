import { useEffect, useState } from 'react';

import { useAuth } from '../contexts';
import Button from '../components/Button';
import Input from '../components/Input';
import LayoutModal from '../pages/Dashboard/LayoutModal';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';

function Profile() {
    const { user, logoutUser, error, setError, upload } = useAuth();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState('https://cdn-icons-png.flaticon.com/512/1946/1946429.png');
    const [index, setIndex] = useState(false);

    const toggleIndex = () => {
        setIndex((prevState) => !prevState);
        setError('');
    };

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };
    const handleUpload = () => {
        upload(photo, user);
    };

    useEffect(() => {
        if (user?.photoURL) {
            setPhotoURL(user.photoURL);
        }
    }, [user]);
    console.log(photoURL);
    return (
        <LayoutModal>
            <div className="flex h-full items-center justify-center">
                {user ? (
                    <div className="flex flex-col justify-between h-screen pb-44 pt-28">
                        <div className="flex items-center justify-center">
                            <img
                                src={photoURL}
                                alt="avatar"
                                className="rounded-full w-36 h-36 p-1 bg-white border border-regal-yellow"
                            />
                        </div>
                        <h1 className="text-base font-semibold select-none">Name: {user.displayName}</h1>
                        <h1 className="text-base font-semibold select-none">Email: {user.email}</h1>
                        <div className="flex items-center justify-between">
                            <h1 className="text-base font-semibold select-none">Avatar:</h1>
                            <Input
                                type="file"
                                onChange={handleChange}
                                className="border-2 p-2 text-sm font-thin"
                            ></Input>
                            <div className="w-1/5">
                                <Button
                                    size={'smF'}
                                    style={'primary'}
                                    disabled={loading || !photo}
                                    onClick={handleUpload}
                                >
                                    Upload
                                </Button>
                            </div>
                        </div>
                        <Button size={'smF'} style={'primary'} onClick={logoutUser}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        {!index ? <SignIn /> : <SignUp />}
                        <div className=" w-full px-28 mb-32">
                            <p className="flex flex-col items-center cursor-pointer" onClick={toggleIndex}>
                                {!index ? 'Create an Account' : 'Already have an account'}
                            </p>
                            {error && (
                                <p className="flex items-center justify-center text-black text-xs bg-red-300 mt-3 px-4 py-1 rounded-md">
                                    {error}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </LayoutModal>
    );
}

export default Profile;
