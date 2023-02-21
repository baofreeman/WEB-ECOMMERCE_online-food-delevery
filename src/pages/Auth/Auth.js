import { image2 } from '../../assets/images';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useAuth } from '../../contexts';

function Wrapper() {
    const [index, setIndex] = useState(false);
    const { error, setError } = useAuth();
    const toggleIndex = () => {
        setIndex((prevState) => !prevState);
        setError('');
    };

    return (
        <>
            <div className="h-full flex max-lg:flex-col max-md:flex-col max-lg:h-screen">
                <div className="max-lg:flex max-lg:h-1/2 max-lg:justify-center max-md:hidden">
                    <img
                        className="h-screen max-lg:h-full max-lg:w-full max-lg:items-center w-auto"
                        src={image2}
                        alt="loi anh"
                    />
                </div>
                <div className="w-1/2 max-md:w-full max-md:flex-1 flex flex-col items-center justify-center">
                    {!index ? <SignIn /> : <SignUp />}
                    <div className=" w-full px-28 max-md:px-4 mb-32 h-1/4">
                        <p className="flex flex-col items-center cursor-pointer mt-4" onClick={toggleIndex}>
                            {!index ? 'Create an Account' : 'Already have an account'}
                        </p>
                        {error && (
                            <p className="flex items-center justify-center text-black text-xs bg-red-300 mt-3 px-4 py-1 rounded-md">
                                {error}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wrapper;
