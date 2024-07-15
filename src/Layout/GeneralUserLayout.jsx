import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar and Footer/Navbar";
import Footer from "../Shared/Navbar and Footer/Footer";

const GeneralUserLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default GeneralUserLayout;