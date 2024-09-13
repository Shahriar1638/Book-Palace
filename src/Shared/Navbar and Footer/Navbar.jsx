/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authentication/Authprovider/Authprovider";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const { user ,userInfos, logOutUser } = useContext(AuthContext);
    const [ role, setRole ] = useState('');

    useEffect(() => {
        if(userInfos) {
            setRole(userInfos.role);
        }
    }, [userInfos]);

    const handleLogOut = () => {
        logOutUser();
        window.location.reload();
    }
    const Options = 
    <>
        <li className="uppercase"><NavLink to="/" className={({ isActive, isPending }) => isActive? "text-blue-500" : ""}>Home</NavLink></li>
        <li className="uppercase"><NavLink to="/bookscollection" className={({ isActive, isPending }) => isActive? "text-blue-500" : ""}>Books Collection</NavLink></li>
        <li className="uppercase"><NavLink to="/communityforums" className={({ isActive, isPending }) => isActive? "text-blue-500" : ""}>Community Forums</NavLink></li>
        { (role != 'admin' && role != '') && <li className="uppercase"><NavLink to="/bookscollection" className={({ isActive, isPending }) => isActive? "text-blue-500" : ""}>Cart</NavLink></li> }
        { (role === 'admin' || role === 'author') && role !== '' && <li className="uppercase"><NavLink to="/dashboard" className={({ isActive, isPending }) => isActive? "text-blue-500" : ""}>Dashboard</NavLink></li> }
        
    </>
    return (
        <nav className="h-24 flex flex-row items-center justify-between px-10 border border-solid border-black">
            <div className="flex flex-row items-center">
                <img className="h-32" src={logo} alt="" />
            </div>
            <div>
                <ul className="flex gap-8 items-center text-xl">
                    {Options}
                </ul>
            </div>
            <div>
                {
                    userInfos ? 
                    <div className="flex items-center">
                        <h1 className="mr-4">{userInfos.name}</h1>
                        <button onClick={handleLogOut}>Logout</button>
                    </div> 
                    : <button><Link to={"/login"}>Login</Link></button> 
                }
            </div>
        </nav>
    );
};

export default Navbar;