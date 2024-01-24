import { Navigate, useLocation } from "react-router-dom";
import useAuthProvider from "../Hooks/useAuthProvider";


const PrivetRoute = ({children}) => {

    const {loading, user} = useAuthProvider();
    const location = useLocation();
    console.log(location);

    if(loading){
        return <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' />
    
};

export default PrivetRoute;