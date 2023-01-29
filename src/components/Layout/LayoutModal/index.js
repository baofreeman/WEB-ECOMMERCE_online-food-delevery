import { Link } from 'react-router-dom';

function LayoutModal({ children }) {
    return (
        <div className="w-full h-screen fixed">
            <div className="w-1/3 bg-white opacity-100 right-0 top-0 absolute h-screen z-10 px-2 py-5">{children}</div>
            <div className="w-2/3 h-screen bg-black opacity-50">
                <Link to={'/dashboard'} className={'w-full h-screen block'}></Link>
            </div>
        </div>
    );
}

export default LayoutModal;
