import { InputStyle } from './themes';

function Input(props) {
    const { type, size, placeholder = '', id, name, value, children } = props;

    return (
        <input className={InputStyle[size]} {...props}>
            {children}
        </input>
    );
}

export default Input;
