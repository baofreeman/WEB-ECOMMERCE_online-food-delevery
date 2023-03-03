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
            {user ? (
                <>
                    <div className="flex w-full items-center justify-center">
                        <div className="w-[150px] h-[150px] rounded-full p-1 border border-regal-yellow">
                            <img src={photoURL} alt="avatar" className="w-full h-full rounded-full object-cover" />
                        </div>
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
                </>
            ) : (
                <div>
                    {!index ? <SignIn /> : <SignUp />}
                    <div className=" w-full px-28 sm:px-4">
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
        </LayoutModal>
    );
}

export default Profile;
