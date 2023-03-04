import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LayoutModal({ children }) {
    return (
        <section className="w-full h-screen fixed sm:h-full sm:flex">
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="w-1/3 md:w-1/2 bg-white right-0 top-0 absolute h-screen z-10 sm:w-full sm:h-full"
            >
                <div className="h-full w-full">
                    <div className="flex w-full h-[80%] sm:h-full sm:justify-start justify-center px-4 py-5 flex-col gap-6 md:gap-5 sm:gap-2">
                        {children}
                    </div>
                </div>
            </motion.div>
            <div className="w-2/3 md:w-1/2 h-screen sm:hidden bg-black opacity-50">
                <Link to={'/dashboard'} className={'w-full h-screen block'}></Link>
            </div>
        </section>
    );
}

export default LayoutModal;
