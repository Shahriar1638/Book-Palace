import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/Authprovider/Authprovider";

const Login = () => {
    const [error , setError] = useState('');
    const navigate = useNavigate();
    const { logInUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        logInUser(email, password)
        .then(result => {
            console.log(result);
            navigate('/');
        })
        .catch(error => {
            console.error(error);
            setError('Invalid email or password');
        });
    }

    
    return (
        <div className="grid grid-cols-7">
            <div className="col-span-5 h-screen bg-purple-500">
            </div>
            <div className="col-span-2 h-screen">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold">Login to your account</h1>
                    <form onSubmit={handleLogin} className="flex flex-col mt-10 w-[26rem]">
                        <input type="text" name="email" placeholder="Your email" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md px-6 py-3" required/>
                        <input type="password" name="password" placeholder="Your password" className="border-b-[1px] border-solid shadow-lg border-gray-400 mt-4 rounded-md px-6 py-3" required/>
                        <input type="submit" value="Login" className="bg-blue-500 text-white p-2 rounded-md mt-4"/>
                        {
                            error && <p className="text-red-500 mt-4">{error}</p>
                        }
                    </form>
                    <div>
                        <h1>Dont have an account ? <span className="text-blue-500 underline"> <Link to={"/signup"}> Sign up now !</Link></span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;