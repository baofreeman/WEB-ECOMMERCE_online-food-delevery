import { useEffect, useState } from 'react';
import { db } from '../../firebase.config';
import { collection, onSnapshot } from 'firebase/firestore';
import { deleteItem } from '../../data/dataOrders';

import Button from '../../components/Button';

function AllOrders() {
    const [orderItem, setOrderItem] = useState([]);

    // Get orders all User on Firebase database
    useEffect(() => {
        const q = collection(db, 'orders');
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const item = querySnapshot.docs.map((doc) => doc.data());
            setOrderItem(item);
        });
        return unsubscribe;
    }, []);
    // console.log(orderItem);
    return (
        <section className="w-full h-full flex flex-col gap-4">
            <div className="flex flex-col px-4 gap-4 w-full justify-center h-[40px] bg-regal-yellow-500 py-2">
                <ul className="flex gap-4 justify-around items-center text-sm font-bold">
                    <li className="text-black w-[5%]">OrderID</li>
                    <li className="text-black w-[25%]">Name</li>
                    <li className="text-black w-[25%]">Address</li>
                    <li className="text-black w-[10%]">Phone</li>
                    <li className="text-black w-[20%]">Item</li>
                    <li className="text-black w-[5%]">Qty</li>
                    <li className="text-black w-[5%]">Price</li>
                    <li className="text-black w-[5%]">Delete</li>
                </ul>
            </div>
            <ul className="flex flex-col px-4 gap-2 w-full h-[320px] overflow-y-scroll">
                {orderItem.map((item, i) => (
                    <li
                        key={i}
                        className="flex gap-2 bg-slate-200 justify-around items-center border-b border-b-slate-300 text-xs"
                    >
                        <h1 className="text-black w-[5%]">{item.orderId}</h1>
                        <h1 className="text-black w-[25%]">{item.name}</h1>
                        <div className="flex flex-col text-black w-[25%]">
                            <h1 className="w-[34%]">{item.address}</h1>
                            <h1 className="w-[33%]">{item.province}</h1>
                            <h1 className="w-[33%]">{item.district}</h1>
                        </div>
                        <h1 className="text-black w-[10%]">{item.phone}</h1>
                        <div className="flex flex-col w-[25%]">
                            {item.cart.map((item, i) => (
                                <div key={i} className="flex w-full">
                                    <h1 className="text-black w-[80%]">{item.title}</h1>
                                    <h1 className="text-black w-[20%]">{item.qty}</h1>
                                </div>
                            ))}
                        </div>
                        <h1 className="text-black w-[5%]">{item.price}</h1>
                        <div className="w-[5%] py-2">
                            <Button
                                size={'buttonSmall'}
                                style={'buttonDelete'}
                                onClick={() => deleteItem(item.id, item.orderId)}
                            >
                                Delete
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default AllOrders;
