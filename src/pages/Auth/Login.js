import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../contexts';
import { useLocation } from 'react-router-dom';
import Loader from '../../components/Loader';

function Login() {
    const { signInUser, forgetPassword, loading } = useAuth();
    const location = useLocation();
    const locationPath = location.pathname.startsWith('/dashboard'); // Match Admin panel

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (value) => {
            const email = value.email;
            const password = value.password;

            // Login User
            if (email && password) {
                signInUser(email, password);
            }
        },

        // Validate
        validationSchema: Yup.object({
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
        }),
    });
    return (
        <>
            <form
                className="w-full flex flex-col gap-4 sm:gap-2 items-center justify-center p-8 sm:p-3 rounded-md border shadow-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit(e);
                }}
            >
                <h1 className="text-2xl text-black md:text-xl sm:text-lg font-bold">Welcome Back</h1>
                <Input
                    type={'email'}
                    id="email"
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
                    disabled={loading}
                    type="submit"
                    size="buttonMedium"
                    style={formik.values.email && formik.values.password ? 'buttonBasic' : 'buttonDisable'}
                >
                    {loading ? <Loader /> : `LOGIN`}
                </Button>
            </form>
            {locationPath ? null : (
                <div className="flex justify-between md:justify-between w-full sm:flex-col md:flex-col sm:justify-center sm:items-center">
                    <div className="flex items-center">
                        <Button size={'linkSmall'} style={'linkBasicBlack'} to={'/signup'}>
                            Create an Account
                        </Button>
                    </div>
                    <div className="flex items-center">
                        <Button size={'linkSmall'} style={'linkBasicBlack'} to>
                            Forgot password
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
