import { image2 } from '../../../assets/images';

function Wrapper({ children }) {
    return (
        <div className="h-full flex">
            <div>
                <img className="h-screen w-auto" src={image2} alt="loi anh" />
            </div>
            {children}
        </div>
    );
}

export default Wrapper;
