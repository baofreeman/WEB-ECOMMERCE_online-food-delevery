import { useSelector } from 'react-redux';
import Button from '../components/Button';
import { deleteItem } from '../data/dataProducts';

import Admin from './Admin/Admin';

function AllProducts() {
    const getFoods = useSelector((state) => state.cartReducer.foodItems);
    console.log(getFoods);

    const hanldedeleteItem = () => {};
    return (
        <Admin>
            <>
                <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll">
                    {getFoods.map((item, i) => (
                        <div className="flex items-center gap-4 ml-4">
                            <div className="flex items-center w-[60px] h-[60px] rounded-full">
                                <img src={item.imageURL} className={'h-full rounded-full object-cover select-none'} />
                            </div>
                            <h1 className="text-black">{item.title}</h1>
                            <h1 className="text-black">{item.price}</h1>
                            <div className="w-[120px]">
                                <Button size={'buttonSmall'} style={'buttonDelete'} onClick={hanldedeleteItem}>
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        </Admin>
    );
}

export default AllProducts;
