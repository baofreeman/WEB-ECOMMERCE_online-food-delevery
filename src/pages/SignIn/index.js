import Input from '../../components/Input';
import Button from '../../components/Button';
import Wrapper from '../../components/Popper/Wapper';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SignIn() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (value) => {
            console.log(value);
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
        <Wrapper>
            <div className="flex flex-col h-screen justify-between items-center py-56 px-32 flex-1">
                <h1 className="text-2xl font-bold">Welcome Back</h1>
                <form className="w-full flex flex-col items-center" onSubmit={formik.handleSubmit}>
                    <Input
                        type={'email'}
                        id="email"
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
                </form>
                <div className="flex justify-between w-full">
                    <Button
                        size={'sm'}
                        type={'basic text-black'}
                        onClick={() => {
                            navigate('/signup', { replace: true });
                        }}
                    >
                        Create an Account
                    </Button>

                    <Button size={'sm'} type={'basic text-black'} to>
                        Forgot password
                    </Button>
                </div>
            </div>
        </Wrapper>
    );
}

export default SignIn;
