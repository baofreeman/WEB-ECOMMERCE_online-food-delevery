import Header from '../components/Header';

function LayoutMenuOnly({ children }) {
    return (
        <div className="h-screen flex flex-col overflow-hidden gap-8 sm:gap-0 bg-regal-green px-[120px] md:px-[60px] sm:px-[20px] text-white">
            <Header />
            {children}
        </div>
    );
}

export default LayoutMenuOnly;
