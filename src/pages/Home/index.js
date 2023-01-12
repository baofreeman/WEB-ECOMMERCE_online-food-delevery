import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Logger from '../Logger';
function Home({ onClick }) {
    return (
        <>
            <div className="grid bg-regal-green px-36 text-white">
                <header className="grid grid-cols-2 mt-10">
                    <div className="flex items-center">
                        <svg width="58" height="67" viewBox="0 0 58 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M57.4751 39.1249C57.4751 46.5178 54.4474 53.608 49.0581 58.8356C43.6688 64.0632 36.3592 67 28.7376 67C21.1159 67 13.8064 64.0632 8.41704 58.8356C3.0277 53.608 1.13572e-07 46.5178 0 39.1249C0 32.1304 3.08616 24.0702 9.17416 15.1693C9.35578 14.9037 9.58962 14.6754 9.86229 14.4976C10.135 14.3197 10.4411 14.1958 10.7632 14.1329C11.0853 14.0699 11.4171 14.0693 11.7395 14.1308C12.0619 14.1924 12.3686 14.3151 12.642 14.4918L22.7239 21.0115L32.3604 1.38199C32.5322 1.03177 32.7882 0.726677 33.1069 0.492341C33.4255 0.258005 33.7975 0.101271 34.1915 0.0353068C34.5856 -0.0306569 34.9902 -0.00392323 35.3713 0.113261C35.7525 0.230446 36.0991 0.434659 36.3821 0.708742C40.9876 5.16815 46.2462 10.5777 50.3304 16.8863C55.1377 24.3126 57.4748 31.5868 57.4748 39.1246L57.4751 39.1249Z"
                                fill="#00EDDF"
                            />
                            <path
                                d="M28.7376 67C36.3592 67 43.6688 64.0632 49.0581 58.8356C43.0934 41.2853 37.4282 32.9392 22.7239 21.0116L12.642 14.4918C12.3686 14.3151 12.0619 14.1925 11.7395 14.1309C11.4171 14.0693 11.0853 14.07 10.7632 14.1329C10.4411 14.1958 10.135 14.3198 9.86229 14.4976C9.58962 14.6755 9.35578 14.9037 9.17416 15.1693C3.08616 24.0703 0 32.1304 0 39.1249C0 46.5179 3.0277 53.608 8.41704 58.8356C13.8064 64.0632 21.1159 67 28.7376 67Z"
                                fill="#E5E5E5"
                            />
                        </svg>
                        <h1 className="ml-4 text-xl font-bold">Lilies</h1>
                    </div>

                    <div className="flex text-base font-semibold justify-end items-center">
                        <Button size={'sm'} type={'basic'} href="/">
                            Home
                        </Button>
                        <Button size={'sm'} type={'basic'} to={'/log'}>
                            Login
                        </Button>
                        <Button size={'sm'} type={'primary'}>
                            Sign up
                        </Button>
                    </div>
                </header>

                <div className="grid flex mt-36">
                    <div className="grid grid-cols-2 flex">
                        <div className="items-center">
                            <h1 className="text-4xl font-medium">Order food anytime, anywhere</h1>
                            <h4 className="text-sm mt-8 font-thin leading-loose">
                                Browse from our list of specials to place your order and have food delivered to you in
                                no time. Affordable, tasty and fast!
                            </h4>
                            <div className="flex justify-start mt-8">
                                <button className="mr-4 bg-gray-600 p-3 rounded-md w-40">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" />
                                </button>
                                <button className="mr-4 bg-gray-600 p-3 rounded-md w-40">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" />
                                </button>
                            </div>
                        </div>
                        <div className="items-center flex justify-center">
                            <a className="" href="#">
                                <img
                                    class="rounded-full w-96 h-96"
                                    src="https://img.dominos.vn/Pizza-Ga-Pho-Mai-Thit-Heo-Xong-Khoi-Cheesy-Chicken-Bacon.jpg"
                                    alt="image description"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="grid flex justify-center mt-36">
                        <h1 className=" text-center text-2xl font-bold">Special Meals of the day!</h1>
                        <h4 className=" text-center text-sm mt-7 w-96 leading-7">
                            Check our sepecials of the day and get discounts on all our meals and swift delivery to what
                            ever location within Ilorin.
                        </h4>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-36 mb-48">
                        <div className="flex flex-col justify-start items-center">
                            <img
                                class="rounded-full w-40 h-40"
                                src="https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg"
                            />
                            <div className="">
                                <h3 className="wrap my-5 px-8 text-xl text-center font-bold text-regal-yellow">
                                    Stir fry Pasta fry
                                </h3>
                                <h4 className="wrap px-8 text-sm font-thin text-center">
                                    Stir fry pasta yada yada yada because of Sesan
                                </h4>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <img
                                class="rounded-full w-40 h-40"
                                src="https://img.dominos.vn/Meat-lover-Pizza-5-Loai-Thit-Thuong-Hang.jpg"
                            />
                            <div className="">
                                <h3 className="wrap my-5 px-8 text-xl text-center font-bold text-regal-yellow">
                                    Pizza Meat Lover
                                </h3>
                                <h4 className="wrap px-8 text-sm font-thin text-center">
                                    Stir fry pasta yada yada yada because of Sesan
                                </h4>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <img
                                class="rounded-full w-40 h-40"
                                src="https://img.dominos.vn/Pepperoni-feast-Pizza-Xuc-Xich-Y.jpg"
                            />
                            <div className="">
                                <h3 className="wrap my-5 px-8 text-xl text-center font-bold text-regal-yellow">
                                    Pepperoni Feast
                                </h3>
                                <h4 className="wrap px-8 text-sm font-thin text-center">
                                    Stir fry pasta yada yada yada because of Sesan
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="mb-36 grid grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-2xl font-semibold text-regal-yellow">Get notified when we update!</h2>
                            <h4 className="text-sm font-normal mt-4">
                                Get notified when we add new items to our specials menu, update our price list of have
                                promos!
                            </h4>
                        </div>

                        <div className="flex justify-end items-start">
                            <input
                                placeholder="getfreeman@gmail.com"
                                className="min-w-0 max-h-12 p-3 leading-none mr-3 rounded-md text-gray-400"
                            />
                            <Button size={'sm'} type={'primary'}>
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
