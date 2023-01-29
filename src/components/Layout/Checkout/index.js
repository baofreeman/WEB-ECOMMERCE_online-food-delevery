import LayoutModal from '../LayoutModal';
import Button from '../../Button';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import Input from '../../Input';
import * as Yup from 'yup';

function Checkout() {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            address: '',
        },
        onSubmit: (value) => {
            console.log(value);
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required').min(3, 'Must be 4 character or more'),
            phone: Yup.string()
                .required('Required')
                .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Must be a valid phone number'),
            address: Yup.string().required('Required'),
        }),
    });
    return (
        <LayoutModal>
            <div className="flex flex-col">
                <h1 className={'text-xl font-bold'}>Checkout</h1>
                <form
                    onSubmit={formik.handleSubmit}
                    className={'w-full flex flex-col items-center px-16 top-1/4 absolute'}
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

                    <Button type={'submit'} style={'primary'} size={'smF'}>
                        Payment
                    </Button>
                </form>
            </div>
        </LayoutModal>
    );
}

export default Checkout;
