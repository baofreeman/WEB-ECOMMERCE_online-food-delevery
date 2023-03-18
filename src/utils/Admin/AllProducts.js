import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../firebase.config';
import { collection, onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';

import { deleteItem } from '../../data/dataProducts';
import { setFoods } from '../../redux/actions';
import Button from '../../components/Button';

function AllProducts() {
    const dispatch = useDispatch();

    const getFoods = useSelector((state) => state.cartReducer.foodItems);
    useEffect(() => {
        const q = collection(db, 'foodItems');
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const item = querySnapshot.docs.map((doc) => doc.data());
            dispatch(setFoods(item));
        });
        return unsubscribe;
    }, []);

    return (
        <>
            <div className="w-full h-full flex flex-col gap-4">
                <ul className="flex flex-col justify-center h-[40px] px-4 gap-4 w-full bg-regal-yellow-500 py-2">
                    <li className="flex gap-4 justify-around items-center text-sm font-medium">
                        <h1 className="text-black w-[5%]">Image</h1>
                        <h1 className="text-black w-[25%]">Title</h1>
                        <h1 className="text-black w-[25%]">Price</h1>
                        <h1 className="text-black w-[10%]">Delete</h1>
                    </li>
                </ul>
                <ul className="flex flex-col px-4 gap-2 w-full h-[320px] overflow-y-scroll">
                    {getFoods.map((item, i) => (
                        <li
                            key={i}
                            className="flex gap-2 justify-around items-center bg-slate-200 text-xs border-b border-b-slate-300"
                        >
                            <div className="w-[5%]">
                                <div className="flex items-center w-[60px] h-[60px] rounded-full">
                                    <img
                                        src={item.imageURL}
                                        className={'w-full h-full rounded-full object-cover select-none'}
                                    />
                                </div>
                            </div>
                            <h1 className="text-black w-[25%] wrap_1">{item.title}</h1>
                            <h1 className="text-black w-[25%] wrap_1">{item.price}</h1>
                            <div className="w-[10%] py-2">
                                <Button size={'buttonSmall'} style={'buttonDelete'} onClick={() => deleteItem(item.id)}>
                                    Remove
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default AllProducts;
