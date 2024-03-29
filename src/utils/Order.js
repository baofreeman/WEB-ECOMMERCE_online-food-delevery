import { useEffect, useState } from 'react';
import { query, where } from 'firebase/firestore';

import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useAuth } from '../contexts';
import LayoutModal from '../layout/LayoutModal';

function Order() {
    const [orderItem, setOrderItem] = useState([]);
    const [field, setField] = useState(true);
    const { user } = useAuth();

    setTimeout(() => {
        localStorage.removeItem('cart');
        localStorage.removeItem('qty');
        localStorage.removeItem('price');
    }, 1000);
    useEffect(() => {
        if (user) {
            const uID = user.uid;
            const q = query(collection(db, 'orders'), where('id', '==', `${uID}`));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const item = querySnapshot.docs.map((doc) => doc.data());
                // console.log(item);
                setOrderItem(item);
            });
            return unsubscribe;
        }
    }, [user]);

    // console.log(orderItem);
    return (
        <LayoutModal>
            <div className="flex flex-col w-full h-screen gap-4 sm:gap-2 items-center sm:justify-start justify-start">
                <h1 className={'text-xl font-bold'}>Order</h1>
                <div className="w-full h-[60vh] md:h-[70vh] sm:h-[50vh] flex flex-col gap-4 sm:gap-2 shadow-form bg-regal-white-400">
                    <div className="overflow-y-scroll scrollbar-hide">
                        {orderItem && field
                            ? orderItem.map((item, i) => (
                                  <section
                                      key={item.orderId}
                                      className="flex flex-1 flex-col my-1 mx-5 border-b border-stone-400 gap-2"
                                  >
                                      <h1 className="text-xs text-regal-yellow font-thin">Order: {item.orderId}</h1>
                                      <div className="flex flex-col">
                                          <div className="flex flex-col w-full justify-center h-[30px]">
                                              <ul className="flex w-full justify-between items-center text-sm font-bold">
                                                  <li className="text-black w-[50%]">Name</li>
                                                  <li className="text-black">Qty</li>
                                                  <li className="text-black w-[10%] text-right">Price</li>
                                              </ul>
                                          </div>
                                          {item.cart.map((product, i) => (
                                              <div key={i} className="flex w-full justify-between">
                                                  <div className="wrap w-[50%] text-sm font-medium select-none">
                                                      {product.title}
                                                  </div>
                                                  <div>{product.qty}</div>
                                                  <div className="text-base font-semibold w-[10%] text-right select-none">
                                                      {`${product.qty * product.price}$`}
                                                  </div>
                                              </div>
                                          ))}
                                      </div>
                                      <div className="flex justify-end w-full text-base font-bold select-none py-2">
                                          <div className="w-1/2 flex">
                                              <p className="w-full flex justify-end mr-4">Total:</p>
                                              <p>{`${item.price}$`}</p>
                                          </div>
                                      </div>
                                  </section>
                              ))
                            : null}
                    </div>
                </div>
                <h1 className="flex items-start justify-start text-sm text-gray-400 font-medium">
                    Thank you for trusting us, we will call to confirm and prepare the dish for you. Wish you enjoy
                    delicious.
                </h1>
            </div>
        </LayoutModal>
    );
}

export default Order;
