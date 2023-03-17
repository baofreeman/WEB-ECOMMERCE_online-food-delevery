import { useLocation } from 'react-router-dom';
import { image2 } from '../../assets/images';
import LayoutMenuOnly from '../../layout/LayoutMenuOnly';
import Login from './Login';
import SignUp from './SignUp';

function AuthWrapper() {
    const location = useLocation();
    const locationPath = location.pathname.startsWith('/signup');
    return (
        <LayoutMenuOnly>
            <div className="h-full items-start justify-center sm:items-center gap-8 flex">
                <div className="w-1/2 h-full flex items-start justify-start sm:hidden md:hidden">
                    <img className="w-full h-srceen object-cover" src={image2} alt="loi anh" />
                </div>
                <div className="flex flex-col gap-2 w-1/2 md:w-full sm:w-full items-center justify-center">
                    {locationPath ? <SignUp /> : <Login />}
                </div>
            </div>
        </LayoutMenuOnly>
    );
}

export default AuthWrapper;
