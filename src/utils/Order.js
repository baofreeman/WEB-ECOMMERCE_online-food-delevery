import LayoutModal from '../layout/LayoutModal';

function Order() {
    let orderCart = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : [];

    setTimeout(() => {
        localStorage.removeItem('cart');
        localStorage.removeItem('qty');
        localStorage.removeItem('price');
    }, 1000);

    console.log(orderCart);

    return (
        <LayoutModal>
            <div className="flex flex-col w-full h-screen gap-4 sm:gap-2 sm:justify-start items-center justify-center">
                <h1 className={'text-xl font-bold'}>Order</h1>
                <div className="w-full shadow-form bg-regal-white-400">
                    <div className="h-[400px] md:h-[300px] sm:h-[250px] overflow-y-scroll">
                        {orderCart.map((item, i) => (
                            <section
                                key={i}
                                className="'flex flex-1 flex-col my-5 mx-5 border-b border-stone-400 md:mt-12 sm:mt-14'"
                            >
                                <div className="flex flex-col">
                                    <h1 className="text-xs text-regal-yellow font-thin">Order: {item.orderId}</h1>
                                    {item.cart.map((product, i) => (
                                        <div key={i} className="flex justify-between mt-1">
                                            <div className="wrap w-1/2 text-sm font-medium my-1 select-none">
                                                {product.title}
                                            </div>
                                            <div>{product.qty}</div>
                                            <div className="text-base font-semibold w-24 text-right select-none">
                                                {product.price}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-end w-full text-base font-bold select-none py-2">
                                    <div className="w-1/2 flex">
                                        <p className="w-full flex justify-end mr-4">Total:</p>
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
                <h1 className="flex items-center text-sm text-gray-400 font-medium">
                    Thank you for trusting us, we will call to confirm and prepare the dish for you. Wish you enjoy
                    delicious.
                </h1>
            </div>
        </LayoutModal>
    );
}

export default Order;
