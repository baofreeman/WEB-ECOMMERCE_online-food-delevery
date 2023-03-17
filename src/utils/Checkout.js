import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Field, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { apiGetPublicDisTrict, apiGetPublicProvinces } from '../data/dataAddress';

import Input from '../components/Input';
import Button from '../components/Button';
import LayoutModal from '../layout/LayoutModal';
import Profile from '../utils/Profile';
import { resetStore } from '../redux/actions';
import { useAuth } from '../contexts';
import { saveOrder } from '../data/dataOrders';
import { SelectField as SelectFieldProvince } from '../components/Select';
import { SelectField as SelectFieldDistrist } from '../components/Select';

function Checkout() {
    // Set data form
    const [provinces, setProvinces] = useState([]);
    const [province, setProvince] = useState();
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState();
    const [field, setField] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // get data store Redux
    const getData = useSelector((state) => state.cartReducer.carts);

    const { user } = useAuth();

    //Local Storage
    const price = JSON.parse(localStorage.getItem('price'));

    // Set field
    useEffect(() => {
        if (user) {
            setField(true);
            navigate('/dashboard/checkout');
        }
    }, [user]);

    // Random number OrderId
    const makeid = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    };

    // Fetch data Provinces
    useEffect(() => {
        const fetchPublicProvinces = async () => {
            const response = await apiGetPublicProvinces();
            console.log(response);
            if (response.status === 200) {
                setProvinces(response?.data.results);
            }
        };
        fetchPublicProvinces();
    }, []);

    // Fetch data District
    useEffect(() => {
        const fetchPublicDistrict = async () => {
            const response = await apiGetPublicDisTrict(province);
            if (response.status === 200) {
                setDistricts(response.data.results);
            }
        };
        province && fetchPublicDistrict(province);
    }, [province]);

    const dataProvince = provinces.map((province) => {
        return { value: province.province_name, label: province.province_name, key: province.province_id };
    });

    const dataDistrict = districts.map((district) => {
        return { value: district.district_name, label: district.district_name, key: district.district_id };
    });
    // Submit
    const onSubmit = async (values, actions) => {
        const data = {
            id: user ? user.uid : null,
            orderId: makeid(6),
            name: values.name,
            address: values.address,
            phone: values.phone,
            province: values.province,
            district: values.district,
            cart: getData,
            price: price,
        };

        console.log(values);
        navigate('/dashboard/order');

        // Local Storage
        let listOrder = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : [];
        listOrder.push(data);
        localStorage.setItem('order', JSON.stringify(listOrder));

        // Save data orders database
        saveOrder(user.uid, data.orderId, data);

        // Reset store redux
        setTimeout(() => {
            dispatch(resetStore());
        }, 2000);
        actions.resetForm(); // reset form
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
    };
    // Formik & Yup
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            address: '',
            province: '',
            district: '',
        },
        onSubmit,
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Required').min(3, 'Must be 4 character or more').trim(),
            phone: Yup.string()
                .required('Required')
                .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Must be a valid phone number'),
            address: Yup.string().required('Required'),
            province: Yup.string().required('Required'),
            district: Yup.string().required('Required'),
        }),
    });
    return (
        <>
            {user && field ? (
                <LayoutModal>
                    <div className="flex flex-col w-full h-full gap-4 sm:gap-2 items-center sm:justify-start justify-center">
                        <h1 className={'text-xl text-center font-bold'}>Checkout</h1>
                        <div className="flex flex-col w-full justify-center items-center">
                            <form
                                action="/dashboard"
                                onSubmit={formik.handleSubmit}
                                className={
                                    'w-full flex flex-col gap-4 sm:gap-2 items-center top-1/4 px-5 py-5 shadow-form'
                                }
                            >
                                <Input
                                    type={'text'}
                                    name="name"
                                    id="name"
                                    size={'m'}
                                    placeholder={'Enter your name'}
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <p className="text-xs font-thin text-red-600">{formik.errors.name}</p>
                                )}

                                <Input
                                    type={'text'}
                                    name="phone"
                                    id="phone"
                                    size={'m'}
                                    placeholder={'Enter your phone'}
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <p className="text-xs font-thin text-red-600">{formik.errors.phone}</p>
                                )}

                                <Input
                                    type={'text'}
                                    name="address"
                                    id="address"
                                    size={'m'}
                                    placeholder={'Enter your address'}
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.address && formik.errors.address && (
                                    <p className="text-xs font-thin text-red-600">{formik.errors.address}</p>
                                )}

                                <SelectFieldProvince
                                    type={'province'}
                                    options={dataProvince}
                                    name="province"
                                    label={'province'}
                                    id="province"
                                    onBlur={() => {
                                        formik.handleBlur({ target: { name: 'province' } });
                                    }}
                                    onChange={(option) => {
                                        console.log(option);
                                        formik.setFieldValue('province', option?.value);
                                        setProvince(option?.key);
                                    }}
                                />
                                {formik.touched.province && formik.errors.province && (
                                    <p className="text-xs font-thin text-red-600">{formik.errors.province}</p>
                                )}

                                <SelectFieldDistrist
                                    type={'district'}
                                    options={dataDistrict}
                                    name="district"
                                    id="district"
                                    onChange={(option) => {
                                        formik.setFieldValue('district', option?.value);
                                        setDistrict(option?.key);
                                    }}
                                />
                                {formik.touched.district && formik.errors.district && (
                                    <p className="text-xs font-thin text-red-600">{formik.errors.district}</p>
                                )}

                                <Button
                                    type="submit"
                                    size={'buttonMedium'}
                                    style={formik.dirty ? 'buttonBasic' : 'buttonDisable'}
                                >
                                    Payment
                                </Button>
                            </form>
                        </div>
                    </div>
                </LayoutModal>
            ) : (
                <Profile />
            )}
        </>
    );
}

export default Checkout;
