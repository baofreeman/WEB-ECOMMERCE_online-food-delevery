import Button from '../Button';

function Footer() {
    const list = [
        {
            name: 'Company',
            data: [
                { path: '/dashboard', display: 'About Us' },
                { path: '/dashboard', display: 'Careers' },
                { path: '/dashboard', display: 'Contact Us' },
            ],
        },
        {
            name: 'Support',
            data: [
                { path: '/dashboard', display: 'Help Center' },
                { path: '/dashboard', display: 'Safety' },
            ],
        },
        {
            name: 'Legal',
            data: [
                { path: '/dashboard', display: 'Cookie Policy' },
                { path: '/dashboard', display: 'Terms of Sevice' },
            ],
        },
    ];
    return (
        <div className="grid grid-cols-4 sm:grid-cols-2 justify-between pb-36 px-[120px] min-h-80 items-start bg-regal-footer text-white md:px-16 sm:px-8 sm:pb-8">
            {list.map((item, i) => (
                <div key={i} className="pt-16 flex flex-col gap-3 items-start">
                    <h2 className="text-base font-bold">{item.name}</h2>
                    {item.data.map((item, i) => (
                        <div key={i} className="flex flex-col gap-1 justify-start items-start">
                            <Button size={'linkSmall'} style={'linkBasic'} to={item.path}>
                                {item.display}
                            </Button>
                        </div>
                    ))}
                </div>
            ))}

            <div className="pt-16 flex flex-col gap-3 items-start">
                <h2 className="text-base font-bold">Install App</h2>
                <div className="flex flex-col gap-2">
                    <Button className="bg-gray-600 p-3 rounded-md w-36 h-18 ">
                        <img
                            className="w-26"
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                            alt="Error Image"
                        />
                    </Button>
                    <Button className="bg-gray-600 p-3 rounded-md w-36 h-18">
                        <img
                            className="w-26"
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                            alt="Error Image"
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
