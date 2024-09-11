import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Dashboard/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="bg-[#0C0C0C] min-h-screen">
            <h1 className="h-28 my-auto py-5 text-center text-5xl font-bold uppercase text-[#F2613F]">Welcome To dashboard</h1>
            <div className="grid grid-cols-9">
                <div className="col-span-2 mx-20">
                    <Sidebar />
                </div>
                <div className="col-span-7 bg-white text-[#0c0c0c] rounded-tl-xl min-h-screen px-">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;