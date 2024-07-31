import { GoogleLogout } from "react-google-login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const clientId = "831109709615-htlaqq7s9gth8su3jbsqb4t5ceh84qm0.apps.googleusercontent.com";

function Logout(){

    const onSuccess = () => {
        console.log("Logout successfull !");
        toast.success('You have been logged out!', {
            position: "top-right",
            // autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText='Logout'
            onLogoutSuccess={onSuccess}
            />
            <ToastContainer />
        </div>
    )
}

export default Logout;