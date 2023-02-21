import Button from '../Button';

function Footer() {
    const list = [
        {
            aboutUs: { path: '/', display: 'About Us' },
            careers: { path: '/signin', display: 'Careers' },
            contactUs: { path: '/signup', display: 'Contact Us' },
            helpCenter: { path: '/dashboard', display: 'Help Center' },
            safetyCenter: { path: '/dashboard/order', display: 'Safety' },
            cookiePolicy: { path: '/dashboard/add', display: 'Cookie Policy' },
            termsofSevice: { path: '/dashboard/add', display: 'Terms of Sevice' },
        },
    ];
    return (
        <div className="grid grid-cols-4 max-md:grid-cols-2 justify-between pb-36 px-36 min-h-80 items-start bg-regal-footer text-white max-lg:px-16 max-md:px-8 max-md:pb-8">
            <div className="pt-16 flex flex-col items-start">
                <h2 className="text-base font-bold mb-6">Company</h2>
                {list.map((item) => (
                    <>
                        <Button to={item.aboutUs.path}>{item.aboutUs.display}</Button>
                        <Button to={item.careers.path}>{item.careers.display}</Button>
                        <Button to={item.contactUs.path}>{item.contactUs.display}</Button>
                    </>
                ))}
            </div>
            <div className="pt-16 flex flex-col items-start">
                <h2 className="text-base font-bold mb-6">Support</h2>
                {list.map((item) => (
                    <>
                        <Button to={item.helpCenter.path}>{item.helpCenter.display}</Button>
                        <Button to={item.safetyCenter.path}>{item.safetyCenter.display}</Button>
                    </>
                ))}
            </div>
            <div className="pt-16 flex flex-col items-start">
                <h2 className="text-base font-bold mb-6">Legal</h2>
                {list.map((item) => (
                    <>
                        <Button to={item.cookiePolicy.path}>{item.cookiePolicy.display}</Button>
                        <Button to={item.termsofSevice.path}>{item.termsofSevice.display}</Button>
                    </>
                ))}
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
