import LayoutMenuOnly from '../../layout/LayoutMenuOnly';
import { useDispatchs } from 'react-redux';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts';

function Admin() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [field, setField] = useState(false);

    useEffect(() => {
        if (user) {
            setField(true);
        }
    }, [user]);
    return (
        <>
            {field && user.email === 'admin@gmail.com' ? (
                <LayoutMenuOnly>
                    <div className="w-full h-[500px] flex flex-col gap-2 items-center justify-start mb-10 bg-regal-white-200 rounded-md">
                        <div className="flex h-[80px] justify-center py-4 gap-4">
                            <Button size={'linkSmall'} style={'linkBasicRounded'} to={'/admin/create'}>
                                Create Product
                            </Button>
                            <Button size={'linkSmall'} style={'linkBasicRounded'} to={'/admin/all-users'}>
                                All Users
                            </Button>
                            <Button size={'linkSmall'} style={'linkBasicRounded'} to={'/admin/all-products'}>
                                All Products
                            </Button>
                            <Button size={'linkSmall'} style={'linkBasicRounded'} to={'/admin/all-orders'}>
                                All Orders
                            </Button>
                        </div>
                        <Outlet />
                    </div>
                </LayoutMenuOnly>
            ) : (
                navigate('/signin')
            )}
        </>
    );
}

export default Admin;
