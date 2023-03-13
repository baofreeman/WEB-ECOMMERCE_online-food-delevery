import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../contexts';

function SignUp() {
    const { registerUser, getStore } = useAuth();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
        },
        onSubmit: (value) => {
            console.log(value);
            const name = value.name;
            const email = value.email;
            const password = value.password;
            const phoneNumber = value.phone;
            if (name && email && password && phoneNumber) {
                registerUser(name, email, password, phoneNumber);
            }
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required').min(3, 'Must be 4 character or more'.trim()),

            email: Yup.string()
                .required('Required')
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a validate')
                .trim(),
            password: Yup.string()
                .required('Required')
                .matches(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                    'Please must be at 8 character and contain at least one letter, one number and one a special character',
                )
                .trim(),
            confirmPassword: Yup.string()
                .required('Required')
                .oneOf([Yup.ref('password'), null], 'Password must match')
                .trim(),
            phone: Yup.string()
                .required('Required')
                .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Must be a valid phone number')
                .trim(),
        }),
    });

    return (
        <div className="flex flex-col w-full items-center">
            <form
                className="w-full flex flex-col gap-4 sm:gap-2 items-center p-8 sm:px-5 sm:py-3 rounded-md border shadow-form"
                onSubmit={formik.handleSubmit}
            >
                <h1
                    className="text-2xl sm:text-base text-black
                 md:text-xl font-bold"
                >
                    Welcome
                </h1>
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
                    type={'email'}
                    id="email"
                    name="email"
                    size={'m'}
                    placeholder={'Enter your email'}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="text-xs font-thin text-red-600">{formik.errors.email}</p>
                )}

                <Input
                    type={'password'}
                    id="password"
                    name="password"
                    size={'m'}
                    placeholder={'Enter your password'}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                    <p className="text-xs font-thin text-red-600">{formik.errors.password}</p>
                )}

                <Input
                    type={'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    size={'m'}
                    placeholder={'Confirm your name'}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                    <p className="text-xs font-thin text-red-600">{formik.errors.confirmPassword}</p>
                )}

                <Input
                    type={'text'}
                    id="phone"
                    name="phone"
                    size={'m'}
                    placeholder={'Enter your phone'}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                />
                {formik.touched.phone && formik.errors.phone && (
                    <p className="text-xs font-thin text-red-600">{formik.errors.phone}</p>
                )}

                <Button
                    type="submit"
                    size="buttonMedium"
                    style={
                        formik.values.name &&
                        formik.values.email &&
                        formik.values.password &&
                        formik.values.confirmPassword &&
                        formik.values.phone
                            ? 'buttonBasic'
                            : 'buttonDisable'
                    }
                >
                    SIGN UP
                </Button>
            </form>
        </div>
    );
}

export default SignUp;
