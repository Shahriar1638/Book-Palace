/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/Authprovider/Authprovider";
import { updateProfile } from "firebase/auth";
import swal from 'sweetalert';

const Signup = () => {
    const [ checkPassword, setCheckPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [error , setError] = useState(null);
    const { createUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    

    const handleSignup = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const profileimg = form.get('profileimg');
        const coverimg = form.get('coverimg');
        if (password.length < 6) {
            return setError('Password must be at least 6 characters long.');
        } else {
            createUser(email, password)
            .then(result => {
                console.log(result.user)             
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: profileimg
                })
                swal("SuccessFully Registered", "Your registration is done. Logging In.", "success")
                    .then(() => {
                        navigate('/login');
                    });
            })
            .catch(error => {
                console.error(error);
                swal("Ooops...!", "Account already exist", "error");
            })
        }
    };
    const handlePasswordOnChange = (e) => {
        setCheckPassword(e.target.value);
        if (e.target.value.length < 6) {
            console.log("yes it is changing");
            setError('Password must be at least 6 characters long.');
        } else {
            setError(null);
        }
    }

    const handlePasswordConfirm = (e) => {
        e.preventDefault();
        const confirmPassword = e.target.value;
        if (confirmPassword !== checkPassword) {
            setError('Password does not match');
        } else {
            setError(null);
        }
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            navigate('/');
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div className="grid grid-cols-7">
            <div className="col-span-5 h-screen pl-44">
                <div className="flex flex-col items-start justify-center h-full">
                    <h1 className="text-4xl font-bold">Create to your account</h1>
                    <form onSubmit={handleSignup} className="flex flex-col mt-10 w-[46rem]">
                        <input type="text" placeholder="Your name" name="name" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md px-6 py-3" />
                        <input type="text" placeholder="Your profile photo url" name="profileimg" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md mt-4 px-6 py-3" />
                        <input type="text" placeholder="Your cover photo url" name="coverimg" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md mt-4 px-6 py-3" />
                        <input type="email" placeholder="Your email" name="email" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md mt-4 px-6 py-3" />
                        <input onChange={handlePasswordOnChange} type="password" placeholder="Your password" name="password" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md mt-4 px-6 py-3" />
                        {
                            (error==="Password must be at least 6 characters long.") && <p className="text-red-500 text-center mt-4">{error}</p>
                        }
                        <input onChange={handlePasswordConfirm} type="password" placeholder="Confirm your password" name="confimPassword" className="border-b-[1px] border-solid shadow-lg border-gray-400 mt-4 rounded-md px-6 py-3" />
                        {
                            (error==='Password does not match') && <p className="text-red-500 text-center mt-4">{error}</p>
                        }
                        <button className={`bg-blue-500 text-white p-2 rounded-md mt-4 ${error ? "disable" : ""}`}>Sign up</button>
                        
                    </form>
                    <div className="mt-4">
                        <h1>Already have an account ? then,<span className="text-blue-500 underline uppercase"> <Link to={"/login"}> log in</Link></span></h1>
                    </div>
                    <div>
                        <button onClick={handleGoogleSignIn} className="bg-blue-500 text-white p-2 rounded-md mt-4">Sign up with Google</button>
                    </div>
                </div>
            </div>
            <div className="col-span-2 h-screen bg-purple-500">
            </div>
        </div>
    );
};

export default Signup;