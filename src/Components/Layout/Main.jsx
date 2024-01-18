import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {

    const location = useLocation();
    const noHaderFooter = location.pathname.includes('myProfile')

    return (
        <div>
            {noHaderFooter || <Navbar />}
            <Outlet />
            {noHaderFooter || <Footer />}
        </div>
    );
};

export default Main;