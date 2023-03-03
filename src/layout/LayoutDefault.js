import Header from '../components/Header';

function LayoutDefault({ children }) {
    return (
        <div className="h-screen flex flex-col overflow-hidden gap-8 bg-regal-green px-36 sm:px-0 md:px-8 text-white">
            <Header />
            {children}
        </div>
    );
}

export default LayoutDefault;
