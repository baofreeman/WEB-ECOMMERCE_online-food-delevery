import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';

import { addCart } from '../../redux/actions';
import Button from '../../components/Button';
import LayoutModal from '../../pages/Dashboard/LayoutModal';
import { useContext, useEffect, useState } from 'react';
import { setFoods } from '../../redux/actions';
import { getAllFoodItems } from '../../data/dataProducts';
function ProductSingle() {
    const { productId } = useParams();
    const [foodItem, setFoodItem] = useState();
    const [fields, setfields] = useState(false);
    const getFoods = useSelector((state) => state.cartReducer.foodItems);
    const data = useOutletContext();
    console.log(getFoods);
    console.log(data);
    console.log(fields);
    const dispatch = useDispatch();

    const getProductDetail = () => {
        const productDetail = data.find((product) => product.id === productId);
        return new Promise((res) => {
            return res(productDetail);
        });
    };
    useEffect(() => {
        products();
    }, []);

    const products = async () => {
        let data = await getProductDetail();
        return data;
    };
    products().then((data) => {
        setFoodItem(data);
        setfields(true);
    });

    const handleAddCart = (productDetail) => {
        dispatch(addCart(productDetail));
    };
    return (
        <LayoutModal>
            {fields && foodItem ? (
                <>
                    <div className={'text-center flex items-center flex-col max:lg-mt-24 max-md:pt-3 max-md:px-2'}>
                        <div className="flex items-center justify-center rounded-full w-[230px] h-[230px]">
                            <img src={foodItem.imageURL} className={'w-full h-full rounded-full object-cover'} />
                        </div>
                        <div className="w-full">
                            <h2 className="mt-3 text-base font-bold">{foodItem.title}</h2>
                            <h4 className="mt-3 text-sm font-thin text-justify h-48 max-lg:h-36 overflow-y-scroll">
                                {foodItem.des}
                            </h4>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full flex-1 pb-5 max-md:px-2">
                        <span className="text-base font-semibold">{foodItem.price}</span>
                        <span className="text-base font-semibold">10-20Mins</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-full">
                            <Button
                                size={'buttonMedium'}
                                style={'buttonPrimary'}
                                onClick={() => handleAddCart(foodItem)}
                            >
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </>
            ) : null}
        </LayoutModal>
    );
}

export default ProductSingle;
