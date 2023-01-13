function Checkout() {
    return (
        <>
            <div
                className="w-2/3 h-screen bg-black opacity-50"
                onClick={() => {
                    setIsOpen(false);
                }}
            ></div>
            <div className="w-1/3 bg-white opacity-100 right-0 top-0 absolute h-screen z-10">
                <h1>Checkout</h1>
            </div>
        </>
    );
}

export default Checkout;
