import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Menu from './Menu';

function Header() {
    const [toggleNavbar, setToggleNavbar] = useState('menu');
    const navbarRef = useRef();

    // Toggle Menu mobile
    const handleMenu = () => {
        setToggleNavbar('close');
        navbarRef.current.classList.remove('sm:hidden');
    };

    const handleClose = () => {
        setToggleNavbar('menu');
        navbarRef.current.classList.add('sm:hidden');
    };

    const getQty = useSelector((state) => state.cartReducer.totalQty);

    return (
        <header className="flex w-full py-[20px] h-[78px] px-[120px] md:px-[60px] sm:px-[20px] justify-between sm:flex bg-regal-green sm:items-center sm:w-full sm:fixed sm:mt-0 sm:h-[62px] sm:top-0 sm:right-0 sm:left-0 z-10">
            <NavLink to={'/dashboard/add'} className="hidden sm:block">
                <FontAwesomeIcon icon={faSackDollar} className="px-2 py-2 text-2xl text-regal-yellow z-10" />
                <span className="bg-regal-yellow-500 rounded-full absolute top-3 left-[38px] w-5 h-5 text-regal-green flex items-center justify-center text-sm font-bold">
                    {getQty}
                </span>
            </NavLink>

            <div className="flex items-center sm:hidden">
                <svg
                    width="52"
                    height="52"
                    viewBox="0 0 58 67"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-9"
                >
                    <path
                        d="M57.4751 39.1249C57.4751 46.5178 54.4474 53.608 49.0581 58.8356C43.6688 64.0632 36.3592 67 28.7376 67C21.1159 67 13.8064 64.0632 8.41704 58.8356C3.0277 53.608 1.13572e-07 46.5178 0 39.1249C0 32.1304 3.08616 24.0702 9.17416 15.1693C9.35578 14.9037 9.58962 14.6754 9.86229 14.4976C10.135 14.3197 10.4411 14.1958 10.7632 14.1329C11.0853 14.0699 11.4171 14.0693 11.7395 14.1308C12.0619 14.1924 12.3686 14.3151 12.642 14.4918L22.7239 21.0115L32.3604 1.38199C32.5322 1.03177 32.7882 0.726677 33.1069 0.492341C33.4255 0.258005 33.7975 0.101271 34.1915 0.0353068C34.5856 -0.0306569 34.9902 -0.00392323 35.3713 0.113261C35.7525 0.230446 36.0991 0.434659 36.3821 0.708742C40.9876 5.16815 46.2462 10.5777 50.3304 16.8863C55.1377 24.3126 57.4748 31.5868 57.4748 39.1246L57.4751 39.1249Z"
                        fill="#00EDDF"
                    />
                    <path
                        d="M28.7376 67C36.3592 67 43.6688 64.0632 49.0581 58.8356C43.0934 41.2853 37.4282 32.9392 22.7239 21.0116L12.642 14.4918C12.3686 14.3151 12.0619 14.1925 11.7395 14.1309C11.4171 14.0693 11.0853 14.07 10.7632 14.1329C10.4411 14.1958 10.135 14.3198 9.86229 14.4976C9.58962 14.6755 9.35578 14.9037 9.17416 15.1693C3.08616 24.0703 0 32.1304 0 39.1249C0 46.5179 3.0277 53.608 8.41704 58.8356C13.8064 64.0632 21.1159 67 28.7376 67Z"
                        fill="#E5E5E5"
                    />
                </svg>
                <h1 className="ml-4 text-xl sm:text-base font-bold">Lilies</h1>
            </div>

            <div className="hidden sm:block">
                {toggleNavbar === 'menu' ? (
                    <>
                        <FontAwesomeIcon icon={faBars} className="text-2xl text-regal-yellow" onClick={handleMenu} />
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon
                            icon={faClose}
                            className="text-2xl text-regal-yellow-500"
                            onClick={handleClose}
                        />
                    </>
                )}
            </div>

            <section
                ref={navbarRef}
                onClick={handleClose}
                className="sm:hidden flex items-center justify-end sm:absolute right-0 left-0 sm:top-[62px] sm:flex sm:flex-col sm:bg-regal-green-500 sm:w-full"
            >
                <Menu />
            </section>
        </header>
    );
}

export default Header;
