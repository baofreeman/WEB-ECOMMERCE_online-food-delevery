import { Link } from 'react-router-dom';
import { ButtonSize, ButtonType, LinkSize, LinkType, Custom } from './theme';

function Button({ to, href, custom, size, type, children, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const ButtonStyle = ButtonType[type] + ' ' + ButtonSize[size];
    const LinkStype = LinkType[type] + ' ' + LinkSize[size];
    let CustomStyle = ' ' + Custom[custom];

    function checkStyle() {
        if (to || href) {
            return LinkStype + CustomStyle;
        } else {
            return ButtonStyle + CustomStyle;
        }
    }

    return (
        <Comp className={checkStyle()} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
