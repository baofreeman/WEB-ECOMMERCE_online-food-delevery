import Input from '../../components/Input';
import Button from '../../components/Button';
import Wrapper from '../../components/Popper/Wapper';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import * as Yup from 'yup';

function SignUp() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required').min(3, 'Must be 4 character or more'),

            email: Yup.string()
                .required('Required')
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a validate'),
            password: Yup.string()
                .required('Required')
                .matches(
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                    'Please must be at 8 character and contain at least one letter, one number and one a special character',
                ),
            confirmPassword: Yup.string()
                .required('Required')
                .oneOf([Yup.ref('password'), null], 'Password must match'),
            phone: Yup.string()
                .required('Required')
                .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Must be a valid phone number'),
        }),
    });

    return (
        <Wrapper>
            <div className="flex flex-col h-screen justify-start items-center py-20 px-32 flex-1">
                <h1 className="text-2xl font-bold">Welcome Back</h1>
                <form className="w-full flex flex-col items-center" onSubmit={formik.handleSubmit}>
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
                        className="w-full bg-regal-green hover:bg-regal-green-500 my-4 text-regal-yellow font-bold rounded py-3 px-11 text-base"
                        type="submit"
                    >
                        SIGN UP
                    </Button>
                </form>

                <Button
                    size={'sm'}
                    type={'basic text-black'}
                    onClick={() => {
                        navigate('/signin', { replace: true });
                    }}
                >
                    Already have an account <span className="font-bold">LOGIN</span>
                </Button>
            </div>
        </Wrapper>
    );
}

export default SignUp;
