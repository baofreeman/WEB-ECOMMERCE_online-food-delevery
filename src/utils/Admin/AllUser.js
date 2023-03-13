import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase.config';
import { deleteItem } from '../../data/dataUsers';
import Button from '../../components/Button';

function AllUser() {
    const [allUser, setAllUser] = useState([]);
    useEffect(() => {
        const q = collection(db, 'users');
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const item = querySnapshot.docs.map((doc) => doc.data());
            setAllUser(item);
        });
        return unsubscribe;
    }, []);
    return (
        <div className="w-full h-full flex flex-col gap-4">
            <ul className="flex flex-col px-4 gap-4 w-full justify-center h-[40px] bg-regal-yellow-500 py-2">
                <li className="flex gap-4 justify-around items-center text-sm font-medium">
                    <h1 className="text-black w-[25%]">Email</h1>
                    <h1 className="text-black w-[25%]">Name</h1>
                    <h1 className="text-black w-[15%]">Phone</h1>
                    <h1 className="text-black w-[25%]">ID</h1>
                    <h1 className="text-black w-[10%]">Delete</h1>
                </li>
            </ul>
            <ul className="flex flex-col px-4 gap-2 w-full h-[320px] overflow-y-scroll">
                {allUser.map((item, i) => (
                    <li
                        key={i}
                        className="flex gap-2 bg-slate-200 justify-around items-center text-xs border-b border-b-slate-300"
                    >
                        <h1 className="text-black w-[25%] wrap_1">{item.email}</h1>
                        <h1 className="text-black w-[25%] wrap_1">{item.displayName}</h1>
                        <h1 className="text-black w-[15%] wrap_1">{item.phoneNumber}</h1>
                        <h1 className="text-black w-[25%] wrap_1">{item.uid}</h1>
                        <div className="w-[10%] py-2">
                            <Button size={'buttonSmall'} style={'buttonDelete'} onClick={() => deleteItem(item.uid)}>
                                Delete
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AllUser;
