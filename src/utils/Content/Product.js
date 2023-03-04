import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button';
import { addCart } from '../../redux/actions';
import { Suspense, useState } from 'react';
import Loader from '../../components/Loader';

function Product({ data }) {
    const dispatch = useDispatch();
    const handleAddCart = (product) => {
        dispatch(addCart(product));
    };
    return (
        <div className="w-full h-screen">
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-2" to={'/dashboard/product'}>
                {data.map((product) => (
                    <section
                        key={product.id}
                        className={
                            'bg-regal-white-400 hover:bg-regal-white-200 hover:cursor-pointer rounded flex flex-col justify-between'
                        }
                    >
                        <Link to={`product/${product.id}`}>
                            <div
                                className={
                                    'text-center flex items-center flex-col gap-2 px-10 py-5 md:px-5 sm:px-1 sm:py-2'
                                }
                            >
                                <div className="w-[120px] h-[120px] rounded-full border border-regal-yellow">
                                    <img src={product.imageURL} className={'w-full h-full rounded-full object-cover'} />
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <h2 className="wrap_1 text-base font-bold sm:text-sm">{product.title}</h2>
                                    <h4 className="wrap text-xs font-thin px-8 text-left sm:text-xs sm:px-2">
                                        {product.des}
                                    </h4>
                                </div>
                            </div>
                        </Link>
                        <div className="flex gap-4 sm:gap-2 justify-between items-center w-full px-8 pb-5 md:px-5 sm:px-2 sm:flex-col">
                            <span className="w-1/3 sm:w-full sm:text-center text-base font-semibold">
                                {product.price}
                            </span>
                            <div className="w-full">
                                <Button
                                    size={'buttonSmall'}
                                    style={'buttonPrimary'}
                                    onClick={() => handleAddCart(product)}
                                >
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default Product;
