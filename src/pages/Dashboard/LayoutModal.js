import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LayoutModal({ children }) {
    return (
        <section className="w-full h-screen fixed">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-1/3 max-lg:w-1/2 bg-white right-0 top-0 absolute h-screen z-10 px-4 max-md:px-0 py-5 max-md:w-full max-md:h-screen max-md:top-16"
            >
                {children}
            </motion.div>
            <div className="w-2/3 max-lg:w-1/2 h-screen bg-black opacity-50">
                <Link to={'/dashboard'} className={'w-full h-screen block'}></Link>
            </div>
        </section>
    );
}

export default LayoutModal;
