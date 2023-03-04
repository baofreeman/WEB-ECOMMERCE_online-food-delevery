import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../contexts';

function SignIn() {
    const { signInUser, forgetPassword } = useAuth();

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
        <div className="flex flex-col w-full items-center">
            <form
                className="w-full flex flex-col gap-4 sm:gap-2 items-center p-8 sm:p-3 rounded-md border shadow-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit(e);
                }}
            >
                <h1 className="text-2xl md:text-xl sm:text-lg font-bold">Welcome Back</h1>
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
                    type="submit"
                    size="buttonMedium"
                    style={formik.values.email && formik.values.password ? 'buttonBasic' : 'buttonDisable'}
                >
                    SIGN IN
                </Button>
                <p>Forget Password</p>
            </form>
        </div>
    );
}

export default SignIn;
