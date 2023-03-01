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
            <div className="grid bg-regal-green px-36 text-white max-lg:px-16 max-md:px-8 max-md:justify-center max-md:block">
                <Header />
                <div className="grid mt-36 gap-28 max-md:mt-0 max-md:flex max-md:flex-col">
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
                        <h1 className=" text-center text-2xl font-bold max-md:text-lg">Special Meals of the day!</h1>
                        <h4 className=" text-center text-sm mt-7 w-96 leading-7 max-md:w-full max-md:text-xs max-md:mt-3">
                            Check our sepecials of the day and get discounts on all our meals and swift delivery to what
                            ever location within Ilorin.
                        </h4>
                    </div>

                    <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
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

                    <div className="grid grid-cols-2 mb-36 gap-10 max-md:grid-cols-1 max-md:gap-6 max-md:block">
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
