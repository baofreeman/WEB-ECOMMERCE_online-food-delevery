import { useNavigate } from 'react-router-dom';

function Navigate() {
    const navigate = useNavigate();

    const getNavigate = () => {
        navigate('order' || 'add' || 'checkout' || 'product', { replace: true });
    };
    return getNavigate;
}

export default Navigate;
