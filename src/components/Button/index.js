import { Link } from 'react-router-dom';
import { ButtonSize, ButtonStyle, LinkSize, LinkStyle } from './theme';

function Button({ to, href, custom, size, type, children, onClick, onToggle, style, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        onToggle,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const ButtonList = ButtonStyle[style] + ' ' + ButtonSize[size];
    const LinkList = LinkStyle[style] + ' ' + LinkSize[size];

    function checkStyle() {
        if (to || href) {
            return LinkList;
        } else {
            return ButtonList;
        }
    }

    return (
        <Comp className={checkStyle()} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
