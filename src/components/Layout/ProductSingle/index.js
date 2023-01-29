import LayoutModal from '../LayoutModal';
import { products } from '../../data';
import { Link, useParams } from 'react-router-dom';
import Button from '../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector, connect } from 'react-redux';
import { addCart, removeInt, removeItem } from '../../../redux/actions';
import { useEffect, useState } from 'react';

function ProductSingle() {
    const { productId } = useParams();
    const getData = useSelector((state) => state.cartReducer.carts);
    const product = products.find((product) => product.id === Number(productId));
    // const { name, des, img, price, qty} = product;
    const dispatch = useDispatch();
    const hanldeDispatch = (e) => {
        dispatch(addCart(product));
    };

    return (
        <LayoutModal>
            <div className={'text-center flex items-center flex-col'}>
                <img src={product.img} width={230} height={230} className={'rounded-full'} />
                <div className="w-full">
                    <h2 className="mt-3 text-base font-bold">{product.name}</h2>
                    <h4 className="mt-3 text-sm font-thin text-justify px-10 h-28 overflow-y-scroll">{product.des}</h4>
                </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full flex-1 px-10 pb-5">
                <span className="text-base font-semibold">{product.price}</span>
                <span className="text-base font-semibold">10-20Mins</span>
            </div>
            <div className="flex justify-between px-8">
                <div className="w-full">
                    <Button size={'smF'} style={'primary'} onClick={hanldeDispatch}>
                        Add to cart
                    </Button>
                </div>
            </div>
        </LayoutModal>
    );
}

export default ProductSingle;
