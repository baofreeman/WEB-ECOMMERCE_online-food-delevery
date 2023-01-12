import Wrapper from '../../components/Popper/Wapper';
import SignUp from '../../components/SignUp';
import SignIn from '../../components/SignIn';
import { useEffect, useState } from 'react';
function Logger({ childrens }) {
    let current = true;
    const [history, setHistory] = useState(current);

    const handleClickSignUp = () => {
        setHistory(!current);
    };
    const handleClickSignIn = () => {
        setHistory(current);
    };

    console.log(history);
    return (
        <div className="Logger">
            <Wrapper>
                {history ? <SignIn onClick={handleClickSignUp} /> : <SignUp onClick={handleClickSignIn} />}
            </Wrapper>
        </div>
    );
}

export default Logger;
