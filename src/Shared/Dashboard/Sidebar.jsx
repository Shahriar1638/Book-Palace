/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { MdOutlinePendingActions,MdOutlineReport,MdHome } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className="flex flex-col items-start justify-start text-[#F2613F]">
            <h1 className="my-4 text-lg font-semibold uppercase "><NavLink className={({ isActive, isPending }) => isActive? "flex items-center text-white" : "flex items-center"} to={`/dashboard/home`}><MdHome className="text-xl mr-1" />Dashboard Home</NavLink></h1>
            <h1 className="my-4 text-lg font-semibold uppercase "><NavLink className={({ isActive, isPending }) => isActive? "flex items-center text-white" : "flex items-center"} to={`/dashboard/reportedposts`}><MdOutlineReport className="text-xl mr-1" /> report list </NavLink></h1>
            <h1 className="my-4 text-lg font-semibold uppercase "><NavLink className={({ isActive, isPending }) => isActive? "flex items-center text-white" : "flex items-center"} to={`/dashboard/pendingbooks`}><MdOutlinePendingActions className="text-xl mr-1" /> pending list</NavLink></h1>
        </div>
    );
};

export default Sidebar;