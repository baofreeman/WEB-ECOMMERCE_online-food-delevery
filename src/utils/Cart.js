import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';
import { addCart, removeInt, removeItem } from '../redux/actions';
import { cartEmpty } from '../assets/images/index';
import { LayoutModal } from '../layout';

function AddToCart() {
    // Get store redux
    const getData = useSelector((state) => state.cartReducer.carts);

    const dispatch = useDispatch();

    // Total Price
    const [price, setPrice] = useState(0);
    const total = () => {
        let price = 0;
        getData.map((e) => {
            price = parseFloat(e.price) * e.qty + price;
            setPrice(price);
        });
    };

    // Set Price Local Storage
    useEffect(() => {
        localStorage.setItem('price', JSON.stringify(price));
        total();
    }, [total]);

    // Dispatch product in store.
    const increment = (product) => {
        dispatch(addCart(product)); // increment product
    };

    const decrement = (product) => {
        dispatch(removeInt(product)); // decrement product
    };
    const remove = (product, i) => {
        dispatch(removeItem(product, i)); // remove product
    };

    return (
        <LayoutModal>
            <div className="flex flex-col w-full h-screen gap-4 sm:gap-2 items-center sm:justify-start justify-start">
                <h1 className={'text-xl font-bold'}>Cart</h1>
                {getData.length ? (
                    <section className="w-full flex flex-col gap-4 sm:gap-2 px-2 shadow-form bg-regal-white-400">
                        <div className="flex flex-col w-full justify-center h-[40px]">
                            <ul className="flex w-full justify-center items-center text-sm font-bold">
                                <li className="text-black w-[20%] sm:w-[30%]">Item</li>
                                <li className="text-black w-[45%] sm:w-[40%]">Name</li>
                                <li className="text-black w-[25%] sm:w-[25%]">Qty</li>
                                <li className="text-black w-[10%] sm:w-[15%]">Price</li>
                            </ul>
                        </div>
                        <div className="h-[50vh] md:h-[60vh] sm:h-[45vh] overflow-y-scroll scrollbar-hide">
                            {getData.map((product, i) => (
                                <section key={product.id} className={'flex flex-col border-b border-stone-400 my-2'}>
                                    <section className="flex w-full items-start sm:items-start">
                                        <div className="w-[20%] sm:w-[30%]">
                                            <div className="w-[60px] h-[60px] flex items-start justify-start rounded-full mb-2">
                                                <img
                                                    src={product.imageURL}
                                                    className={'h-full rounded-full object-cover select-none'}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-[45%] sm:w-[40%] items-start justify-center">
                                            <h2 className="wrap text-sm font-medium select-none">{product.title}</h2>
                                            <span
                                                className="text-center text-xs text-red-500 hover:text-red-300 cursor-pointer select-none"
                                                onClick={() => remove(product, i)}
                                            >
                                                remove
                                            </span>
                                        </div>
                                        <div className="flex items-center w-[25%] select-none gap-2">
                                            <FontAwesomeIcon
                                                icon={faPlus}
                                                className={'text-xs text-center cursor-pointer'}
                                                onClick={() => increment(product)}
                                            />
                                            <span className=" bg-regal-green-500 w-12 text-white rounded-md text-sm text-center py-1 px-2">
                                                {product.qty}
                                            </span>
                                            <FontAwesomeIcon
                                                icon={faMinus}
                                                className={'text-xs text-center cursor-pointer'}
                                                onClick={
                                                    product.qty === 1
                                                        ? () => remove(product, i)
                                                        : () => decrement(product)
                                                }
                                            />
                                        </div>
                                        <span className="text-base font-semibold w-[10%] sm:w-[15%] select-none">
                                            {`${product.qty * product.price}$`}
                                        </span>
                                    </section>
                                </section>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-2">
                            <span className="flex justify-end w-full text-base font-bold select-none">
                                Subtotal: {`${price}$`}
                            </span>
                            <div className="w-full flex right-0 left-0 md:px-0">
                                <Button
                                    to={'/dashboard/checkout'}
                                    size={'linkMediumRounded'}
                                    style={getData.length ? 'linkBasicRounded' : 'linkDisable'}
                                >
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </section>
                ) : (
                    <img src={cartEmpty} />
                )}
            </div>
        </LayoutModal>
    );
}

export default AddToCart;
