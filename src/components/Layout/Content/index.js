import Product from '../../Product';
function Content() {
    return (
        <div className="grid w-full bg-white px-5 py-5 h-screen">
            <div className="grid overflow-y-scroll overflow-x-hidden">
                <Product />
            </div>
        </div>
    );
}

export default Content;
