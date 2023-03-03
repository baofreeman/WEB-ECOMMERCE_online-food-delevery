import { Link } from 'react-router-dom';
import { img1, img2, img3, img4 } from '../assets/images';

import Footer from '../components/Footer';
import Button from '.././components/Button';
import Header from '../components/Header';

function Home() {
    const listFoods = [
        {
            title: 'Steak House Burger',
            path: img2,
            des: 'Beyond Burger, caramelized onion sauce, blue cheese crumbles, iceberg lettuce, and horseradish aioli served on a brioche bun',
        },
        {
            title: 'Supper Green Quinoa',
            path: img3,
            des: 'Nourishing mix of kale, baby spinach, cabbage, carrots, marinated quinoa, dried cranberries, avocado, sunflower seeds, almonds, spiced pepitas, and red beets tossed in a mango-lemon vinaigrette',
        },
        {
            title: 'VG Classic Burger',
            path: img4,
            des: 'Beyond burger, American cheese, special sauce, lettuce, tomato, and onion on a brioche bun',
        },
    ];
    return (
        <>
            <div className="grid w-full h-full md:px-[60px] bg-regal-green px-[120px] text-white sm:justify-center">
                <Header />
                <div className="grid mt-36 gap-28 sm:mt-0 sm:flex sm:flex-col">
                    <div className="grid grid-cols-2 sm:grid-cols-1 sm:pt-32">
                        <div className="items-center">
                            <h1 className="text-4xl font-medium sm:text-2xl">Order food anytime, anywhere</h1>
                            <h4 className="text-sm sm:text-xs sm:mt-4 mt-8 font-thin leading-loose">
                                Browse from our list of specials to place your order and have food delivered to you in
                                no time. Affordable, tasty and fast!
                            </h4>
                            <div className="flex justify-start mt-8 sm:mt-4 sm:justify-between">
                                <button className="mr-4 bg-gray-600 p-3 rounded-md w-40 sm:w-32 sm:mr-0">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" />
                                </button>
                                <button className="mr-4 bg-gray-600 p-3 rounded-md w-40 sm:w-32 sm:mr-0">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" />
                                </button>
                            </div>
                        </div>
                        <div className="items-center flex justify-center">
                            <Link
                                className="flex items-center justify-center rounded-full w-[300px] h-[300px]"
                                to="/dashboard"
                            >
                                <img
                                    className="rounded-full w-full h-full object-cover"
                                    src={img1}
                                    alt="image description"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="grid justify-center">
                        <h1 className=" text-center text-2xl font-bold sm:text-lg">Special Meals of the day!</h1>
                        <h4 className=" text-center text-sm mt-7 w-96 leading-7 sm:w-full sm:text-xs sm:mt-3">
                            Check our sepecials of the day and get discounts on all our meals and swift delivery to what
                            ever location within Ilorin.
                        </h4>
                    </div>

                    <div className="grid grid-cols-3 gap-6 sm:grid-cols-1">
                        {listFoods.map((item, i) => (
                            <div key={i} className="flex flex-col justify-start items-center gap-4">
                                <div className="items-center flex justify-center">
                                    <Link
                                        className="flex items-center justify-center rounded-full w-[150px] h-[150px]"
                                        to="/dashboard"
                                    >
                                        <img
                                            className="rounded-full w-full h-full object-cover"
                                            src={item.path}
                                            alt="image description"
                                        />
                                    </Link>
                                </div>
                                <Button size={'linkMedium'} style={'linkPrimary'} to={'/dashboard'}>
                                    {item.title}
                                </Button>
                                <h4 className="wrap px-8 text-sm font-thin text-center">{item.des}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 mb-36 gap-10 sm:grid-cols-1 sm:gap-6 sm:block">
                        <div>
                            <h2 className="text-2xl font-semibold text-regal-yellow sm:text-base">
                                Get notified when we update!
                            </h2>
                            <h4 className="text-sm font-normal mt-4 sm:text-xs sm:mt-2">
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
