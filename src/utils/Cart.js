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
        getData.map((e, i) => {
            price = parseFloat(e.price) * e.qty + price;
            setPrice(price);
        });
    };

    // Set Price Local Storage
    useEffect(() => {
        localStorage.setItem('price', JSON.stringify(price));
        total();
    }, [total]);

    // Dispatch product in store
    const increment = (product) => {
        dispatch(addCart(product));
    };

    const decrement = (product) => {
        dispatch(removeInt(product));
    };
    const remove = (product, i) => {
        dispatch(removeItem(product, i));
    };

    return (
        <LayoutModal>
            <div className="flex flex-col w-full h-screen gap-4 sm:gap-2 items-center sm:justify-start justify-start">
                <h1 className={'text-xl font-bold'}>Cart</h1>
                {getData.length ? (
                    <div className="w-full flex flex-col gap-4 sm:gap-2 shadow-form bg-regal-white-400">
                        <div className="h-[50vh] md:h-[60vh] sm:h-[50vh] overflow-y-scroll">
                            {getData.map((product, i) => (
                                <section
                                    key={product.id}
                                    className={'flex flex-1 flex-col my-1 mx-5 border-b border-stone-400 gap-4'}
                                >
                                    <section className="flex w-full items-start sm:items-center py-4 sm:py-2">
                                        <div className="flex items-center w-[25%] h-[60px] rounded-full">
                                            <img
                                                src={product.imageURL}
                                                className={'h-full rounded-full object-cover select-none'}
                                            />
                                        </div>
                                        <div className="flex flex-col w-[25%] items-start justify-center flex-1">
                                            <h2 className="wrap text-sm font-medium select-none">{product.title}</h2>
                                            <span
                                                className="text-center text-xs text-red-500 hover:text-red-300 cursor-pointer select-none"
                                                onClick={() => remove(product, i)}
                                            >
                                                remove
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center w-[35%] select-none gap-2">
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
                                        <span className="text-base font-semibold w-[15%] text-right select-none">
                                            {`${product.qty * product.price}$`}
                                        </span>
                                    </section>
                                </section>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-2">
                            <span className="flex justify-end w-full text-base font-bold px-5 select-none">
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
                    </div>
                ) : (
                    <img src={cartEmpty} />
                )}
            </div>
        </LayoutModal>
    );
}

export default AddToCart;
