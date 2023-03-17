import { InputStyle } from './themes';

function Input(props) {
    const { size, children } = props;

    return (
        <input className={InputStyle[size]} {...props}>
            {children}
        </input>
    );
}

export default Input;
