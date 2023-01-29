import Button from '../../Button';
import LayoutModal from '../LayoutModal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeInt, removeItem } from '../../../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function AddToCart() {
    const getData = useSelector((state) => state.cartReducer.carts);
    const dispatch = useDispatch();
    const [price, setPrice] = useState(0);

    const total = () => {
        let price = 0;
        getData.map((e, i) => {
            price = parseFloat(e.price) * e.qty + price;
        });
        setPrice(price);
    };

    const hanldeRemove = (i) => {
        dispatch(removeItem(i));
    };
    const increment = (e) => {
        dispatch(addCart(e));
    };
    const remove = (i) => {
        dispatch(removeItem(i));
    };
    const decrement = (product) => {
        dispatch(removeInt(product));
    };
    useEffect(() => {
        total();
    }, [total]);

    console.log(getData);
    return (
        <LayoutModal>
            {getData.length ? (
                <>
                    <div className="flex justify-between my-5 mx-5">
                        <div className="flex">
                            <h4 className="ml-3 mr-20">Item</h4>
                            <h4>Name</h4>
                        </div>
                        <div className="flex">
                            <h4>Qty</h4>
                            <h4 className="ml-16">Sub-Total</h4>
                        </div>
                    </div>
                    <div className="h-96 overflow-y-scroll">
                        {getData.map((product, i) => (
                            <section key={i} className={'flex flex-1 flex-col my-5 mx-5'}>
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
                                            onClick={() => hanldeRemove(i)}
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
                                            onClick={product.qty <= 1 ? (i) => remove(i) : () => decrement(product)}
                                        />
                                    </div>
                                    <span className="text-base font-semibold w-24 text-right select-none">
                                        {product.qty * product.price}
                                    </span>
                                </div>
                            </section>
                        ))}
                    </div>
                </>
            ) : (
                <p>Empty</p>
            )}
            <div className="flex flex-col items-end">
                <span className="text-base font-bold mx-5 select-none mt-5">Total: {price}</span>
                <div className="w-full right-0 left-0 px-8 mt-5">
                    <Button to={'/dashboard/checkout'} size={'smB'} style={'basicB'}>
                        Checkout
                    </Button>
                </div>
            </div>
        </LayoutModal>
    );
}

export default AddToCart;
