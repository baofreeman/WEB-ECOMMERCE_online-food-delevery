import { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../contexts';

function SignIn() {
    const emailRef = useRef();
    const { signInUser, error, forgetPassword } = useAuth();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (value, actions) => {
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
        <div className="flex flex-col w-full px-28 max-lg:h-1/2 max-md:px-4 justify-end items-center flex-1 max-lg:px-28 max-lg:justify-center">
            <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
            <form
                className="w-full flex flex-col items-center"
                onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit(e);
                }}
            >
                <Input
                    type={'email'}
                    id="email"
                    ref={emailRef}
                    name="email"
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
                    className="w-full bg-regal-green hover:bg-regal-green-500 my-4 text-regal-yellow font-bold rounded py-3 px-11 text-base"
                    type="submit"
                >
                    SIGN IN
                </Button>
                {/* <p onClick={forgotPassword}>Forget Password</p> */}
            </form>
        </div>
    );
}

export default SignIn;
