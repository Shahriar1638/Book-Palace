import { NavLink } from "react-router-dom";

const Errorpage = () => {
    return (
        <div>
            <h1> 404 error <NavLink to="/"> <span className="text-red-600">Go back Home</span> </NavLink></h1>
        </div>
    );
};

export default Errorpage;