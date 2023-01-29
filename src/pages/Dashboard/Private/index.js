import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const isAuth = true;

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
