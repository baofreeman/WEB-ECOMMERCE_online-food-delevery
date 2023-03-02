import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';

import { addCart } from '../../redux/actions';
import Button from '../../components/Button';
import LayoutModal from '../../pages/Dashboard/LayoutModal';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
function ProductSingle() {
    const { productId } = useParams();
    const [foodItem, setFoodItem] = useState();
    const [fields, setfields] = useState(false);
    const data = useOutletContext();
    const dispatch = useDispatch();

    const productDetail = data.find((product) => product.id === productId);

    useEffect(() => {
        if (data) {
            setfields(true);
            setFoodItem(productDetail);
        }
    }, [data]);

    console.log(data);

    const handleAddCart = (productDetail) => {
        dispatch(addCart(productDetail));
    };
    return (
        <LayoutModal>
            {fields && foodItem ? (
                <>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center rounded-full w-[260px] h-[260px] p-1 border border-regal-yellow">
                            <img src={foodItem.imageURL} className={'w-full h-full rounded-full object-cover'} />
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-[120px] gap-3">
                        <h2 className="text-base font-bold">{foodItem.title}</h2>
                        <h4 className="flex-1 h-[100px] text-sm font-thin text-justify overflow-y-scroll">
                            {foodItem.des}
                        </h4>
                    </div>
                    <div className="flex justify-between items-center gap-4 w-full">
                        <span className="text-base font-semibold">{foodItem.price}</span>
                        <span className="text-base font-semibold">10-20Mins</span>
                    </div>
                    <div className="w-full">
                        <Button size={'buttonMedium'} style={'buttonPrimary'} onClick={() => handleAddCart(foodItem)}>
                            Add to cart
                        </Button>
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </LayoutModal>
    );
}

export default ProductSingle;
