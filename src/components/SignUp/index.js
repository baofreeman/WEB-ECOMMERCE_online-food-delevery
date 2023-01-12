import Input from '../Input';
import Button from '../Button';

function SignUp({ onClick }) {
    return (
        <div className="flex flex-col h-screen justify-between items-center py-44 px-32 flex-1">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <Input type={'text'} id="1" size={'m'} placeholder={'entername'} />
            <Input type={'text'} id="1" size={'m'} placeholder={'entername'} />
            <Input type={'text'} id="1" size={'m'} placeholder={'entername'} />
            <Button size="m" type="secondary" custom={'width'}>
                SIGN UP
            </Button>
            <Button size={'sm'} type={'basic text-black'} to onClick={onClick}>
                Already have an account <span className="font-bold">LOGIN</span>
            </Button>
        </div>
    );
}

export default SignUp;
