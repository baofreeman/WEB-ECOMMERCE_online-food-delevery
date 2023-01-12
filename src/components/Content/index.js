import { image3, image4 } from '../../assets/images';
import Button from '../Button';

function Content() {
    return (
        <div className="grid w-full bg-white px-10 py-10">
            <div className="grid grid-cols-3 gap-2 pb-20">
                <div className="flex flex-col items-center py-5 px-10 bg-regal-white-400 hover:bg-regal-white-200 hover:cursor-pointer rounded">
                    <img src={image4} width={80} height={80} className={'rounded-full'} />
                    <h2 className="mt-3 text-base font-bold">Stir Fry Pasta</h2>
                    <h4 className="mt-3 text-sm font-thin px-8 text-center">
                        The in-house pasta and chicken by chef Moose
                    </h4>
                    <div className="mt-6 flex justify-between items-center w-full flex-1">
                        <span className="text-base font-semibold">N 1,000.00</span>
                        <Button size={'sm'} type={'primary'}>
                            Add to cart
                        </Button>
                    </div>
                </div>{' '}
                <div className="flex flex-col items-center py-5 px-10 bg-regal-white-400 hover:bg-regal-white-200 hover:cursor-pointer rounded">
                    <img src={image4} width={80} height={80} className={'rounded-full'} />
                    <h2 className="mt-3 text-base font-bold">Stir Fry Pasta</h2>
                    <h4 className="mt-3 text-sm font-thin px-8 text-center">
                        The in-house pasta and chicken by chef Moose
                    </h4>
                    <div className="mt-6 flex justify-between items-center w-full flex-1">
                        <span className="text-base font-semibold">N 1,000.00</span>
                        <Button size={'sm'} type={'primary'}>
                            Add to cart
                        </Button>
                    </div>
                </div>{' '}
                <div className="flex flex-col items-center py-5 px-10 bg-regal-white-400 hover:bg-regal-white-200 hover:cursor-pointer rounded">
                    <img src={image4} width={80} height={80} className={'rounded-full'} />
                    <h2 className="mt-3 text-base font-bold">Stir Fry Pasta</h2>
                    <h4 className="mt-3 text-sm font-thin px-8 text-center">
                        The in-house pasta and chicken by chef Moose
                    </h4>
                    <div className="mt-6 flex justify-between items-center w-full flex-1">
                        <span className="text-base font-semibold">N 1,000.00</span>
                        <Button size={'sm'} type={'primary'}>
                            Add to cart
                        </Button>
                    </div>
                </div>{' '}
                <div className="flex flex-col items-center py-5 px-10 bg-regal-white-400 hover:bg-regal-white-200 hover:cursor-pointer rounded">
                    <img src={image4} width={80} height={80} className={'rounded-full'} />
                    <h2 className="mt-3 text-base font-bold">Stir Fry Pasta</h2>
                    <h4 className="mt-3 text-sm font-thin px-8 text-center">
                        The in-house pasta and chicken by chef Moose
                    </h4>
                    <div className="mt-6 flex justify-between items-center w-full flex-1">
                        <span className="text-base font-semibold">N 1,000.00</span>
                        <Button size={'sm'} type={'primary'}>
                            Add to cart
                        </Button>
                    </div>
                </div>{' '}
                <div className="flex flex-col items-center py-5 px-10 bg-regal-white-400 hover:bg-regal-white-200 hover:cursor-pointer rounded">
                    <img src={image4} width={80} height={80} className={'rounded-full'} />
                    <h2 className="mt-3 text-base font-bold">Stir Fry Pasta</h2>
                    <h4 className="mt-3 text-sm font-thin px-8 text-center">
                        The in-house pasta and chicken by chef Moose
                    </h4>
                    <div className="mt-6 flex justify-between items-center w-full flex-1">
                        <span className="text-base font-semibold">N 1,000.00</span>
                        <Button size={'sm'} type={'primary'}>
                            Add to cart
                        </Button>
                    </div>
                </div>{' '}
                <div className="flex flex-col items-center py-5 px-10 bg-regal-white-400 hover:bg-regal-white-200 hover:cursor-pointer rounded">
                    <img src={image4} width={80} height={80} className={'rounded-full'} />
                    <h2 className="mt-3 text-base font-bold">Stir Fry Pasta</h2>
                    <h4 className="mt-3 text-sm font-thin px-8 text-center">
                        The in-house pasta and chicken by chef Moose
                    </h4>
                    <div className="mt-6 flex justify-between items-center w-full flex-1">
                        <span className="text-base font-semibold">N 1,000.00</span>
                        <Button size={'sm'} type={'primary'}>
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
