import { useDispatch } from 'react-redux';
import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { addCart } from '../../redux/actions';
import LayoutModal from '../../layout/LayoutModal';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

function ProductDetail() {
    const { productId } = useParams();
    const [foodItem, setFoodItem] = useState();
    const [fields, setfields] = useState(false);
    const data = useOutletContext();
    const dispatch = useDispatch();

    const productDetail = data.find((product) => product.id === productId); // Match product id with product param router

    useEffect(() => {
        if (data) {
            setfields(true);
            setFoodItem(productDetail);
        }
    }, [data]);

    const handleAddCart = (productDetail) => {
        dispatch(addCart(productDetail)); // add product
    };

    return (
        <LayoutModal>
            {fields && foodItem ? (
                <section className="flex flex-col w-full h-[70vh] md:h-[70vh] sm:h-[30vh] gap-4 sm:gap-2 items-center sm:justify-start justify-start">
                    <div className="flex w-[40vh] h-[40vh] sm:w-[30vh] md:w-[30vh] sm:h-[30vh] md:h-[30vh] items-center justify-center">
                        <div className="flex items-center justify-center rounded-full w-full h-full p-1 border border-regal-yellow">
                            <img
                                src={foodItem.imageURL}
                                className={
                                    'w-[39vh] h-[39vh] sm:w-[29vh] sm:h-[29vh] md:w-[29vh] md:h-[29vh] rounded-full object-cover'
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full h-full gap-3">
                        <h2 className="h-[10%] text-base font-bold">{foodItem.title}</h2>
                        <h4 className="flex-1 h-[90%] text-sm font-thin text-justify overflow-y-scroll scrollbar-hide">
                            {foodItem.des}
                        </h4>
                    </div>
                    <div className="flex justify-between items-center gap-4 w-full">
                        <span className="text-base font-semibold">{foodItem.price}$</span>
                        <span className="text-base font-semibold">10-20Mins</span>
                    </div>
                    <div className="w-full">
                        <Button size={'buttonMedium'} style={'buttonPrimary'} onClick={() => handleAddCart(foodItem)}>
                            Add to cart
                        </Button>
                    </div>
                </section>
            ) : (
                <Loader />
            )}
        </LayoutModal>
    );
}

export default ProductDetail;
