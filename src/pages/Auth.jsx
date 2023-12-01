import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Auth = () => {
    const navigate = useNavigate();

    const [isAuth, setIsAuth] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleAuth = () => {
        setIsAuth(true);
        setDisabled(false);
    }

    const handleRedirect = () => {
        navigate('/');
    }

    return (

        <>
        <h1>Auth page</h1>
        {isAuth && <p>Authorization completed</p>}
        <div>
            <button disabled={!disabled} onClick={handleAuth}> Pres to log in</button>
            <button disabled={disabled} onClick={handleRedirect}>Start</button>
        </div>
        </>
    );
};

export default Auth;