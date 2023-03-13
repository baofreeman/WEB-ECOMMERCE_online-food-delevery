import { useState } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';
import { image2 } from '../../assets/images';
import { useAuth } from '../../contexts';
import LayoutMenuOnly from '../../layout/LayoutMenuOnly';

function Wrapper() {
    const [index, setIndex] = useState(false);
    const { error, setError } = useAuth();
    const toggleIndex = () => {
        setIndex((prevState) => !prevState);
        setError('');
    };

    return (
        <LayoutMenuOnly>
            <div className="h-full items-start sm:items-center justify-center gap-8 flex">
                <div className="max-w-fit h-full flex items-start justify-start sm:hidden md:hidden">
                    <img className="object-cover" src={image2} alt="loi anh" />
                </div>
                <div className="w-1/2 sm:w-full md:w-full flex flex-col items-center justify-center gap-4">
                    {!index ? <SignIn /> : <SignUp />}
                    <div className="px-6">
                        <div className="flex text-xs items-center justify-center cursor-pointer" onClick={toggleIndex}>
                            {!index ? (
                                <>
                                    <p className="mr-1 text-black">Create your</p>
                                    <p className="text-blue-600 hover:text-orange-500 hover:decoration-solid hover:decoration-orange-500">
                                        Account
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="mr-1 text-black">Already have an</p>
                                    <p className="text-blue-600 hover:text-orange-500 hover:decoration-solid hover:decoration-orange-500">
                                        Account
                                    </p>
                                </>
                            )}
                        </div>
                        {error && (
                            <p className="flex items-center justify-center text-black text-xs bg-red-300 mt-3 px-4 py-1 rounded-md">
                                {error}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </LayoutMenuOnly>
    );
}

export default Wrapper;
