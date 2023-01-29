import { Link } from 'react-router-dom';
import Button from '../Button';
import { products } from '../data';
import { useDispatch, useSelector, connect } from 'react-redux';
import { addCart } from '../../redux/actions';
import { useState } from 'react';

function Product() {
    const dispatch = useDispatch();
    const hanldeDis = (e) => {
        dispatch(addCart(e));
    };

    return (
        <div className="w-full h-screen">
            <div className="grid grid-cols-3 gap-2" to={'/dashboard/product'}>
                {products.map((product) => (
                    <section
                        key={product.id}
                        className={
                            'bg-regal-white-400 hover:bg-regal-white-200 hover:cursor-pointer rounded flex flex-col'
                        }
                    >
                        <Link to={`product/${product.id}`}>
                            <div className={'text-center flex items-center flex-col px-10 py-5'}>
                                <img src={product.img} width={80} height={80} className={'rounded-full'} />
                                <div className="w-full">
                                    <h2 className="wrap_1 mt-3 text-base font-bold">{product.name}</h2>
                                    <h4 className="wrap mt-3 text-sm font-thin px-8 text-left">{product.des}</h4>
                                </div>
                            </div>
                        </Link>
                        <div className="mt-1 flex justify-between items-center w-full px-10 pb-5">
                            <span className="text-base font-semibold">{product.price}</span>
                            <Button size={'sm'} style={'primary'} onClick={() => hanldeDis(product)}>
                                Add to cart
                            </Button>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default Product;
