import {GoogleLogin} from 'react-google-login';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const clientId = "831109709615-htlaqq7s9gth8su3jbsqb4t5ceh84qm0.apps.googleusercontent.com";

function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const onSuccess = (res) => {
        console.log("Login Success!! Current user: ", res.profileObj);
        setIsLoggedIn(true);
    }

    const onFailure = (res) => {
        console.log("Login Failed!! res: ", res);
    }

    // if (isLoggedIn) {
    //     return <Navigate to="/" />;
    // }

    return(
        <div id="signInButton">
            <GoogleLogin
            clientId={clientId}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
}

export default Login;