import Button from '../Button';

function AddCart({ setIsAdd }) {
    return (
        <>
            <div
                className="w-1/2 h-screen bg-black opacity-50"
                onClick={() => {
                    setIsAdd(false);
                }}
            ></div>
            <div className="w-1/2 bg-white opacity-100 right-0 top-0 absolute h-screen">
                <h1>AddCart</h1>
                <Button size={'lg'} type={'basic'} custom={'width'}>
                    Checkout
                </Button>
            </div>
        </>
    );
}

export default AddCart;
