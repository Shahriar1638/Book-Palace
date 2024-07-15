import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [ user, setUser ] = useState("Guest");
    const Options = 
    <>
        <li className="uppercase"><NavLink to="/" className={({ isActive, isPending }) => isActive? "text-blue-500" : ""}>Home</NavLink></li>
        <li className="uppercase"><NavLink to="/bookscollection" className={({ isActive, isPending }) => isActive? "text-blue-500" : ""}>Books Collection</NavLink></li>
        <li className="uppercase"><NavLink to="/community" className={({ isActive, isPending }) => isActive? "text-blue-500" : ""}>community</NavLink></li>
    </>
    return (
        <nav className="h-24 flex flex-row items-center justify-between px-10 border border-solid border-black">
            <div className="flex flex-row items-center">
                <img className="mr-4 text-2xl font-bold" src="" alt="" />
                <h1>Book Palace</h1>
            </div>
            <div>
                <ul className="flex gap-8 items-center text-xl">
                    {Options}
                </ul>
            </div>
            <div>
                {
                    user === "Guest" ? 
                    <button>Login</button> : 
                    <div><h1 className="mr-4">{user}</h1><button>Logout</button></div>
                }
            </div>
        </nav>
    );
};

export default Navbar;