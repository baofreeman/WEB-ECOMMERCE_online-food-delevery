function Footer() {
    return (
        <div className="flex justify-between px-36 h-80 items-start bg-regal-footer text-white">
            <div className="pt-16">
                <h2 className="text-base font-bold mb-6">Company</h2>
                <h3 className="text-sm font-thin">About Us</h3>
                <h3 className="text-sm font-thin my-3">Careers</h3>
                <h3 className="text-sm font-thin">Contact Us</h3>
            </div>
            <div className="pt-16">
                <h2 className="text-base font-bold mb-6">Support</h2>
                <h3 className="text-sm font-thin">Help Center</h3>
                <h3 className="text-sm font-thin my-3">Safety Center</h3>
            </div>
            <div className="pt-16">
                <h2 className="text-base font-bold mb-6">Legal</h2>
                <h3 className="text-sm font-thin">Cookies Policy</h3>
                <h3 className="text-sm font-thin my-3">Privacy Policy</h3>
                <h3 className="text-sm font-thin">Terms of Service</h3>
                <h3 className="text-sm font-thin my-3">Dispute resolution</h3>
            </div>
            <div className="pt-16">
                <h2 className="text-base font-bold mb-6">Install App</h2>
                <div className="flex flex-col">
                    <button className="bg-gray-600 p-3 rounded-md w-36 h-18 ">
                        <img
                            className="w-26"
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                        />
                    </button>
                    <button className="bg-gray-600 p-3 rounded-md w-36 h-18 mt-3">
                        <img
                            className="w-26"
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
