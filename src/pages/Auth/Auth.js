import { useState } from 'react';

import SignUp from './SignUp';
import { image2 } from '../../assets/images';
import { useAuth } from '../../contexts';
import LayoutMenuOnly from '../../layout/LayoutMenuOnly';
import Login from './Login';

function Wrapper({ children }) {
    const [index, setIndex] = useState(false);
    const { error, setError } = useAuth();
    const toggleIndex = () => {
        setIndex((prevState) => !prevState);
        setError('');
    };

    return (
        <LayoutMenuOnly>
            <div className="h-full items-start sm:items-center sm:justify-center gap-8 flex">
                <div className="w-auto h-full flex items-start justify-start sm:hidden md:hidden">
                    <img className="w-auto h-srceen object-cover" src={image2} alt="loi anh" />
                </div>
                {children}
            </div>
        </LayoutMenuOnly>
    );
}

export default Wrapper;
