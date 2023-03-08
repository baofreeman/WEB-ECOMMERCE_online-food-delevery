import LayoutMenuOnly from '../../layout/LayoutMenuOnly';
import { setFoods } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllFoodItems } from '../../data/dataProducts';

function Admin({ children }) {
    const dispatch = useDispatch();
    const getFoods = useSelector((state) => state.cartReducer.foodItems);
    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllFoodItems();
            return data;
        };
        fetchData()
            .then((data) => {
                dispatch(setFoods(data));
                console.log(data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }, []);

    return (
        <LayoutMenuOnly>
            <div className="w-full h-full flex gap-4 items-center justify-center mb-10 bg-regal-white-200 rounded-md">
                {children}
            </div>
        </LayoutMenuOnly>
    );
}

export default Admin;
