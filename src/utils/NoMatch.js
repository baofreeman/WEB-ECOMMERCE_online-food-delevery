import { LayoutMenuOnly } from '../layout';
import Button from '../components/Button';

function NoMatch() {
    return (
        <LayoutMenuOnly>
            <section className="flex flex-col h-full item-center justify-center">
                <h1 className="text-[200px] sm:text-[80px] leading-[200px] sm:leading-[80px] text-center font-bold text-black">
                    404
                </h1>
                <h1 className="text-[50px] sm:text-[30px] text-center font-thin text-black">Page not found</h1>
                <h1 className="text-xs text-center font-thin text-black">
                    The page you are looking for doens't exist or an other error occured. Go to
                </h1>
                <Button size={'linkSmall'} style={'linkPrimary'} to={'/'}>
                    Home page
                </Button>
            </section>
        </LayoutMenuOnly>
    );
}

export default NoMatch;
