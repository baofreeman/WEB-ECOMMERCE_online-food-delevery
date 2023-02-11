import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { apiGetPublicDisTrict, apiGetPublicProvinces } from '../data/dataAddress';
import Input from '../components/Input';
import Select from '../components/Select';
import LayoutModal from '../pages/Dashboard/LayoutModal';

function Checkout() {
    const [provinces, setProvinces] = useState([]);
    const [province, setProvince] = useState();
    const [districts, setDistricts] = useState([]);
    const [district, setDistrict] = useState();
    const country = {
        province: province,
        district: district,
    };

    const onSubmit = async (values, actions) => {
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };

    console.log(country);
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            address: '',
        },
        onSubmit,
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Required').min(3, 'Must be 4 character or more'),
            phone: Yup.string()
                .required('Required')
                .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Must be a valid phone number'),
            address: Yup.string().required('Required'),

            // provinces: Yup.object().shape({
            //     label: Yup.string().required(),
            //     value: Yup.string().required(),
            // }),
        }),
    });
    useEffect(() => {
        const fetchPublicProvinces = async () => {
            const response = await apiGetPublicProvinces();
            if (response.status === 200) {
                setProvinces(response?.data.results);
            }
        };
        fetchPublicProvinces();
    }, []);

    useEffect(() => {
        const fetchPublicDistrict = async () => {
            const response = await apiGetPublicDisTrict(province);
            if (response.status === 200) {
                setDistricts(response.data.results);
            }
        };
        province && fetchPublicDistrict(province);
    }, [province]);

    // console.log({ province, district });
    return (
        <LayoutModal>
            <div className="flex flex-col w-full items-center">
                <h1 className={'text-xl font-bold'}>Checkout</h1>
                <form
                    onSubmit={formik.handleSubmit}
                    className={'w-full flex flex-col items-center top-1/4 absolute px-5'}
                >
                    <Input
                        type={'text'}
                        name="name"
                        id="name"
                        size={'m'}
                        placeholder={'Enter your name'}
                        value={formik.values.name}
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
                    <Select
                        type={'province'}
                        name="province"
                        id="province"
                        value={province}
                        setValue={setProvince}
                        options={provinces}
                        label={'province'}
                        onChange={formik.handleChange}
                    ></Select>
                    {formik.touched.province && formik.errors.province && (
                        <p className="text-xs font-thin text-red-600">{formik.errors.province}</p>
                    )}
                    <Select
                        type={'district'}
                        name="district"
                        id="district"
                        value={district}
                        setValue={setDistrict}
                        options={districts}
                        label={'district'}
                        onChange={formik.handleChange}
                    ></Select>
                    {formik.touched.district && formik.errors.district && (
                        <p className="text-xs font-thin text-red-600">{formik.errors.district}</p>
                    )}

                    <button type={'submit'}>Payment</button>
                </form>
            </div>
        </LayoutModal>
    );
}

export default Checkout;
