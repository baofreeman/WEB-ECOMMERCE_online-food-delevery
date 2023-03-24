import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';

function LayoutMenuOnly({ children }) {
    const location = useLocation();
    const locationpath = location.pathname.startsWith('/dashboard'); // Match Admin panel

    return (
        <div className="h-screen flex flex-col overflow-hidden gap-8 sm:gap-0 text-white">
            {locationpath ? (
                <div className="hidden sm:flex">
                    <Header />
                </div>
            ) : (
                <>
                    <Header />
                    <div className="px-[120px] md:px-[60px] sm:px-[20px] sm:items-center md:items-center h-full">
                        {children}
                    </div>
                </>
            )}
        </div>
    );
}

export default LayoutMenuOnly;
