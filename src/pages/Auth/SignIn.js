import { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../contexts';

function SignIn() {
    const emailRef = useRef();
    const { signInUser, forgetPassword } = useAuth();
    console.log(emailRef);
    const forgot = () => {
        if (emailRef.current.value) forgetPassword(emailRef.current.value).then(() => (emailRef.current.value = ''));
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (value) => {
            const email = value.email;
            const password = value.password;
            if (email && password) {
                signInUser(email, password);
            }
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .required('Required')
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a validate'),
            password: Yup.string()
                .required('Required')
                .matches(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                    'Please must be at 8 character and contain at least one letter, one number and one a special character',
                ),
        }),
    });
    return (
        <div className="flex flex-col w-full px-16 max-lg:h-1/2 max-md:px-4 max-md:justify-end justify-end items-center flex-1 max-lg:px-28 max-lg:justify-center">
            <form
                className="w-full flex flex-col items-center px-10 py-10 rounded-md border-2 shadow-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit(e);
                }}
            >
                <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
                <Input
                    type={'email'}
                    id="email"
                    ref={emailRef}
                    name="email"
                    value={formik.values.email}
                    size={'m'}
                    placeholder={'Email'}
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
                    placeholder={'Password'}
                    onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                    <p className="text-xs font-thin text-red-600">{formik.errors.password}</p>
                )}
                <Button
                    type="submit"
                    size="buttonMedium"
                    style={formik.values.email && formik.values.password ? 'buttonBasic' : 'buttonDisable'}
                >
                    SIGN IN
                </Button>
                <p onClick={forgot}>Forget Password</p>
            </form>
        </div>
    );
}

export default SignIn;
