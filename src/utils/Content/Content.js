import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFoods } from '../../redux/actions';
import { useSelector } from 'react-redux';

import Product from './Product';
import { getAllFoodItems } from '../../data/dataProducts';

function Content({ data }) {
    // const [data, setData] = useState([]);
    // const getFoods = useSelector((state) => state.cartReducer.foodItems);

    // const dispatch = useDispatch();
    // const fetchData = async () => {
    //     await getAllFoodItems().then((data) => {
    //         // setData(data);
    //         dispatch(setFoods(data));
    //     });
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <div className="grid w-full bg-white px-5 py-5 max-md:my-3 h-screen">
            <div className="grid overflow-y-scroll overflow-x-hidden">
                <Product data={data} />
            </div>
        </div>
    );
}

export default Content;
