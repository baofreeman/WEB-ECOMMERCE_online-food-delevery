import { Header } from '../components/Header';

function LayoutMenuOnly({ children }) {
    return (
        <div className="h-screen flex flex-col overflow-hidden gap-8 sm:gap-0 text-white">
            <Header />
            <div className="px-[120px] md:px-[60px] sm:px-[20px] sm:items-center md:items-center h-full">
                {children}
            </div>
        </div>
    );
}

export default LayoutMenuOnly;
