import React from 'react'

const Navbar = () => {
    return (
        <header>
            <div className="navbar bg-base-50 bg-darkbrown">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            
                        </ul>
                    </div>
                    <a>
                    <img src="logo.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='text-beige'href="/">Home</a></li>
                        <li>
                            <details>
                                <summary className='text-beige'>Book</summary>
                                <ul className="p-2">
                                    <li><a href="/menu">All</a></li>
                                    <li><a>Fiction</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a className='text-beige'>Order</a></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="btn bg-beige">Login</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar