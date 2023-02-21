import { Link } from 'react-router-dom';

function LayoutModal({ children }) {
    return (
        <section className="w-full h-screen fixed">
            <div className="w-1/3 max-lg:w-1/2 bg-white right-0 top-0 absolute h-screen z-10 px-4 max-md:px-0 py-5 max-md:w-full max-md:h-screen max-md:top-16">
                {children}
            </div>
            <div className="w-2/3 max-lg:w-1/2 h-screen bg-black opacity-50">
                <Link to={'/dashboard'} className={'w-full h-screen block'}></Link>
            </div>
        </section>
    );
}

export default LayoutModal;
