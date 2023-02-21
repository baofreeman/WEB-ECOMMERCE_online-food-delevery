import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addCart } from '../../redux/actions';
import { products } from '../../data';
import Button from '../../components/Button';
import LayoutModal from '../../pages/Dashboard/LayoutModal';

function ProductSingle() {
    const { productId } = useParams();
    const product = products.find((product) => product.id === Number(productId));
    const dispatch = useDispatch();
    const handleAddCart = (e) => {
        dispatch(addCart(e));
    };

    return (
        <LayoutModal>
            <div className={'text-center flex items-center flex-col max:lg-mt-24'}>
                <img src={product.img} width={230} height={230} className={'rounded-full'} />
                <div className="w-full">
                    <h2 className="mt-3 text-base font-bold">{product.name}</h2>
                    <h4 className="mt-3 text-sm font-thin text-justify h-28 max-lg:h-36 overflow-y-scroll">
                        {product.des}
                    </h4>
                </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full flex-1 pb-5">
                <span className="text-base font-semibold">{product.price}</span>
                <span className="text-base font-semibold">10-20Mins</span>
            </div>
            <div className="flex justify-between">
                <div className="w-full">
                    <Button size={'buttonMedium'} style={'buttonPrimary'} onClick={() => handleAddCart(product)}>
                        Add to cart
                    </Button>
                </div>
            </div>
        </LayoutModal>
    );
}

export default ProductSingle;
