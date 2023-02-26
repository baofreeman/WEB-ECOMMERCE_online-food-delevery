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
            <div className="flex h-full w-full items-center justify-center">
                {user ? (
                    <div className="flex w-full flex-col justify-between h-screen pb-44 pt-28 max-lg:pb-96 max-lg:pt-60">
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
                            <Input type="file" onChange={handleChange} size={'sm'}></Input>
                            <div className="w-1/5">
                                <Button
                                    size={'buttonSmall'}
                                    style={'buttonPrimary'}
                                    disabled={loading || !photo}
                                    onClick={handleUpload}
                                >
                                    <p>Upload</p>
                                </Button>
                            </div>
                        </div>
                        <Button size={'buttonMedium'} style={'buttonBasic'} onClick={logoutUser}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className="w-full flex flex-col items-center justify-center">
                        {!index ? <SignIn /> : <SignUp />}
                        <div className=" w-full px-28 max-md:px-4 mb-32">
                            <p className="flex flex-col text-xs items-center cursor-pointer mt-4" onClick={toggleIndex}>
                                {!index ? 'Create an Account' : 'Already have an Account'}
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
