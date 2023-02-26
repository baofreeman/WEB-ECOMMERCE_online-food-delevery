import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Button from '.././components/Button';
import Header from '../components/Header';

function Home() {
    return (
        <>
            <div className="grid bg-regal-green px-36 text-white max-lg:px-16 max-md:px-8 max-md:justify-center max-md:block">
                <Header />
                <div className="grid mt-36 max-md:mt-0 max-md:flex max-md:flex-col">
                    <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:pt-32">
                        <div className="items-center">
                            <h1 className="text-4xl font-medium max-md:text-2xl">Order food anytime, anywhere</h1>
                            <h4 className="text-sm max-md:text-xs max-md:mt-4 mt-8 font-thin leading-loose">
                                Browse from our list of specials to place your order and have food delivered to you in
                                no time. Affordable, tasty and fast!
                            </h4>
                            <div className="flex justify-start mt-8 max-md:mt-4 max-md:justify-between">
                                <button className="mr-4 bg-gray-600 p-3 rounded-md w-40 max-md:w-32 max-md:mr-0">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" />
                                </button>
                                <button className="mr-4 bg-gray-600 p-3 rounded-md w-40 max-md:w-32 max-md:mr-0">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" />
                                </button>
                            </div>
                        </div>
                        <div className="items-center flex justify-center">
                            <Link className="" to="/dashboard">
                                <img
                                    className="rounded-full w-96 h-96 max-lg:h-72 max-lg:w-72 max-md:w-56 max-md:h-56 max-md:mt-12"
                                    src="https://img.dominos.vn/Pizza-Ga-Pho-Mai-Thit-Heo-Xong-Khoi-Cheesy-Chicken-Bacon.jpg"
                                    alt="image description"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="grid justify-center mt-36 max-md:mt-12">
                        <h1 className=" text-center text-2xl font-bold max-md:text-lg">Special Meals of the day!</h1>
                        <h4 className=" text-center text-sm mt-7 w-96 leading-7 max-md:w-full max-md:text-xs max-md:mt-3">
                            Check our sepecials of the day and get discounts on all our meals and swift delivery to what
                            ever location within Ilorin.
                        </h4>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-36 mb-48 max-md:grid-cols-1 max-md:mt-16 max-md:mb-16">
                        <div className="flex flex-col justify-start items-center">
                            <Link to={'/dashboard'}>
                                <img
                                    className="rounded-full w-40 h-40 mb-4 max-md:h-28 max-md:w-28"
                                    src="https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg"
                                />
                            </Link>
                            <div className="flex flex-col items-center">
                                <Button size={'linkMedium'} style={'linkPrimary'} to={'/dashboard'}>
                                    Stir fry Pasta fry
                                </Button>
                                <h4 className="wrap px-8 text-sm font-thin text-center mt-4 max-md:mt-2">
                                    Stir fry pasta yada yada yada because of Sesan
                                </h4>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <Link to={'/dashboard'}>
                                <img
                                    className="rounded-full w-40 h-40 mb-4 max-md:h-28 max-md:w-28"
                                    src="https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg"
                                />
                            </Link>
                            <div className="flex flex-col items-center">
                                <Button size={'linkMedium'} style={'linkPrimary'} to={'/dashboard'}>
                                    Stir fry Pasta fry
                                </Button>
                                <h4 className="wrap px-8 text-sm font-thin text-center mt-4">
                                    Stir fry pasta yada yada yada because of Sesan
                                </h4>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <Link to={'/dashboard'}>
                                <img
                                    className="rounded-full w-40 h-40 mb-4 max-md:h-28 max-md:w-28"
                                    src="https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg"
                                />
                            </Link>
                            <div className="flex flex-col items-center">
                                <Button size={'linkMedium'} style={'linkPrimary'} to={'/dashboard'}>
                                    Stir fry Pasta fry
                                </Button>
                                <h4 className="wrap px-8 text-sm font-thin text-center mt-4">
                                    Stir fry pasta yada yada yada because of Sesan
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="mb-36 grid grid-cols-2 gap-10 max-md:grid-cols-1 max-md:gap-6 max-md:block max-md:mb-16">
                        <div>
                            <h2 className="text-2xl font-semibold text-regal-yellow max-md:text-base">
                                Get notified when we update!
                            </h2>
                            <h4 className="text-sm font-normal mt-4 max-md:text-xs max-md:mt-2">
                                Get notified when we add new items to our specials menu, update our price list of have
                                promos!
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
