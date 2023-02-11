import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';
import { addCart, removeInt, removeItem } from '../redux/actions';
import LayoutModal from '../pages/Dashboard/LayoutModal';

function AddToCart() {
    const getData = useSelector((state) => state.cartReducer.carts);
    const getQty = useSelector((state) => state.cartReducer.totalQty);

    const dispatch = useDispatch();
    const [price, setPrice] = useState(0);
    const total = () => {
        let price = 0;
        getData.map((e, i) => {
            price = parseFloat(e.price) * e.qty + price;
            setPrice(price);
        });
    };
    useEffect(() => {
        total();
    }, [total]);

    const increment = (e) => {
        dispatch(addCart(e));
    };

    const decrement = (product) => {
        dispatch(removeInt(product));
    };
    const remove = (product, i) => {
        dispatch(removeItem(product, i));
    };
    console.log({ data: getData, qty: getQty, price: price });

    return (
        <LayoutModal>
            {getQty ? (
                <>
                    <div className="flex justify-between mx-5 my-5 max-lg:hidden">
                        <div className="flex">
                            <h4 className="ml-3 mr-20">Item</h4>
                            <h4>Name</h4>
                        </div>
                        <div className="flex">
                            <h4>Qty</h4>
                            <h4 className="ml-16">Sub-Total</h4>
                        </div>
                    </div>
                    <div className="h-64 overflow-y-scroll max-lg:h-3/4">
                        {getData.map((product, i) => (
                            <section key={i} className={'flex flex-1 flex-col my-5 mx-5 max-lg:mt-12 max-md:mt-14'}>
                                <div className="flex items-start">
                                    <img
                                        src={product.img}
                                        width={60}
                                        height={60}
                                        className={'rounded-full select-none'}
                                    />
                                    <div className="flex flex-col items-start justify-center flex-1 ml-4">
                                        <h2 className="wrap text-sm font-medium select-none">{product.name}</h2>
                                        <span
                                            className="text-center text-xs text-red-500 cursor-pointer select-none"
                                            onClick={() => remove(product, i)}
                                        >
                                            remove
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-center ml-4 select-none">
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            className={'text-xs text-center cursor-pointer'}
                                            onClick={() => increment(product)}
                                        />
                                        <span className=" bg-regal-green-500 w-12 text-white rounded-md text-sm text-center mx-2 py-1 px-2">
                                            {product.qty}
                                        </span>
                                        <FontAwesomeIcon
                                            icon={faMinus}
                                            className={'text-xs text-center cursor-pointer'}
                                            onClick={
                                                product.qty === 1 ? () => remove(product, i) : () => decrement(product)
                                            }
                                        />
                                    </div>
                                    <span className="text-base font-semibold w-24 text-right select-none">
                                        {product.qty * product.price}
                                    </span>
                                </div>
                            </section>
                        ))}
                        <span className="flex justify-end w-full text-base font-bold px-5 select-none mt-5">
                            {price}
                        </span>
                    </div>
                </>
            ) : (
                <p>Empty</p>
            )}
            <div className="flex flex-col items-end">
                <div className="w-full right-0 left-0 mt-5 max-lg:px-0">
                    <Button to={'/dashboard/checkout'} size={'smB'} style={'basicB'}>
                        Checkout
                    </Button>
                </div>
            </div>
        </LayoutModal>
    );
}

export default AddToCart;
