import { image3, image4 } from '../../assets/images';
import Button from '../Button';
import Product from '../Product';
function Content() {
    return (
        <div className="grid w-full bg-white px-10 py-10 h-screen">
            <div className="grid grid-cols-3 gap-2 pb-20">
                <Product
                    image={image4}
                    name={'Stir Fry Pasta'}
                    desc={'The in-house pasta and chicken by chef Moose'}
                    price={'1,000.00'}
                />

                <Product
                    image={image4}
                    name={'Stir Fry Pasta'}
                    desc={'The in-house pasta and chicken by chef Moose'}
                    price={'1,000.00'}
                />
                <Product
                    image={image4}
                    name={'Stir Fry Pasta'}
                    desc={'The in-house pasta and chicken by chef Moose'}
                    price={'1,000.00'}
                />
                <Product
                    image={image4}
                    name={'Stir Fry Pasta'}
                    desc={'The in-house pasta and chicken by chef Moose'}
                    price={'1,000.00'}
                />
                <Product
                    image={image4}
                    name={'Stir Fry Pasta'}
                    desc={'The in-house pasta and chicken by chef Moose'}
                    price={'1,000.00'}
                />
            </div>
        </div>
    );
}

export default Content;
