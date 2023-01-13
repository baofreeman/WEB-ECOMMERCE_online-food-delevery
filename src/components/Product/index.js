import AddCart from '../AddCart';
import Button from '../Button';
import Modal from '../Modal';
import useModal from '../Modal/useModal';
import ProductSingle from '../ProductSingle';
function Product({ image, name, desc, price }) {
    const { isOpen, setIsOpen, toggle, click, setIsAdd, isAdd } = useModal();
    console.log(isAdd);
    return (
        <div className="flex flex-col items-center bg-regal-white-400 hover:bg-regal-white-200 hover:cursor-pointer rounded">
            <div className={'text-center flex items-center flex-col px-10 py-5'} onClick={toggle}>
                <img src={image} width={80} height={80} className={'rounded-full'} />
                <h2 className="mt-3 text-base font-bold">{name}</h2>
                <h4 className="mt-3 text-sm font-thin px-8 text-center">{desc}</h4>
            </div>
            {isOpen && (
                <Modal>
                    <ProductSingle setIsOpen={setIsOpen} />
                </Modal>
            )}
            <div className="mt-6 flex justify-between items-center w-full flex-1 px-10 pb-5">
                <span className="text-base font-semibold">{price}</span>
                <Button size={'sm'} type={'primary'} onClick={click}>
                    Add to cart
                </Button>
                {isAdd && (
                    <Modal>
                        <AddCart setIsAdd={setIsAdd} />
                    </Modal>
                )}
            </div>
        </div>
    );
}

export default Product;
