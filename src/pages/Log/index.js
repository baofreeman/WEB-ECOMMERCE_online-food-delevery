import Logger from '../../components/Logger';
import { image2 } from '../../assets/images';

function Log() {
    return (
        <div className="h-full flex">
            <div>
                <img className="h-screen w-auto" src={image2} alt="loi anh" />
            </div>
            <div className="flex items-center justify-center flex-1">
                <Logger />
            </div>
        </div>
    );
}

export default Log;
