import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addCart } from '../../redux/actions';
import Button from '../../components/Button';
import LayoutModal from '../../pages/Dashboard/LayoutModal';

function ProductSingle() {
    const { productId } = useParams();
    console.log(productId);

    const getFoods = useSelector((state) => state.cartReducer.foodItems);

    const productDetail = getFoods.find((product) => product.id === productId);
    console.log(productDetail);
    const dispatch = useDispatch();
    const handleAddCart = (productDetail) => {
        dispatch(addCart(productDetail));
    };

    return (
        <LayoutModal>
            <div className={'text-center flex items-center flex-col max:lg-mt-24 max-md:pt-3 max-md:px-2'}>
                <img src={productDetail.imageURL} width={230} height={230} className={'rounded-full'} />
                <div className="w-full">
                    <h2 className="mt-3 text-base font-bold">{productDetail.title}</h2>
                    <h4 className="mt-3 text-sm font-thin text-justify h-48 max-lg:h-36 overflow-y-scroll">
                        {productDetail.des}
                    </h4>
                </div>
            </div>
            <div className="mt-6 flex justify-between items-center w-full flex-1 pb-5 max-md:px-2">
                <span className="text-base font-semibold">{productDetail.price}</span>
                <span className="text-base font-semibold">10-20Mins</span>
            </div>
            <div className="flex justify-between">
                <div className="w-full">
                    <Button size={'buttonMedium'} style={'buttonPrimary'} onClick={() => handleAddCart(productDetail)}>
                        Add to cart
                    </Button>
                </div>
            </div>
        </LayoutModal>
    );
}

export default ProductSingle;
