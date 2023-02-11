import Button from '../Button';

function Footer() {
    return (
        <div className="grid grid-cols-4 max-md:grid-cols-2 justify-between pb-36 px-36 min-h-80 items-start bg-regal-footer text-white max-lg:px-16 max-md:px-8 max-md:pb-8">
            <div className="pt-16 flex flex-col items-start">
                <h2 className="text-base font-bold mb-6">Company</h2>
                <Button className="text-sm font-thin" to={'/dashboard'}>
                    About Us
                </Button>
                <Button className="text-sm font-thin my-3" to={'/dashboard'}>
                    Careers
                </Button>
                <Button className="text-sm font-thin" to={'/dashboard'}>
                    Contact Us
                </Button>
            </div>
            <div className="pt-16 flex flex-col items-start">
                <h2 className="text-base font-bold mb-6">Support</h2>
                <Button className="text-sm font-thin" to={'/dashboard'}>
                    Help Center
                </Button>
                <Button className="text-sm font-thin my-3" to={'/dashboard'}>
                    Safety Center
                </Button>
            </div>
            <div className="pt-16 flex flex-col items-start">
                <h2 className="text-base font-bold mb-6">Legal</h2>
                <Button className="text-sm font-thin" to={'/dashboard'}>
                    Cookies Policy
                </Button>
                <Button className="text-sm font-thin my-3" to={'/dashboard'}>
                    Privacy Policy
                </Button>
                <Button className="text-sm font-thin" to={'/dashboard'}>
                    Terms of Service
                </Button>
                <Button className="text-sm font-thin my-3" to={'/dashboard'}>
                    Dispute resolution
                </Button>
            </div>
            <div className="pt-16 flex flex-col items-start">
                <h2 className="text-base font-bold mb-6">Install App</h2>
                <div className="flex flex-col">
                    <Button className="bg-gray-600 p-3 rounded-md w-36 h-18 ">
                        <img
                            className="w-26"
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                        />
                    </Button>
                    <Button className="bg-gray-600 p-3 rounded-md w-36 h-18 mt-3">
                        <img
                            className="w-26"
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
