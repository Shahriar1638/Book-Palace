import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="grid grid-cols-7">
            <div className="col-span-5 h-screen bg-purple-500">
            </div>
            <div className="col-span-2 h-screen">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl font-bold">Login to your account</h1>
                    <form className="flex flex-col mt-10 w-[26rem]">
                        <input type="text" name="email" placeholder="Your email" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md px-6 py-3" />
                        <input type="password" name="password" placeholder="Your password" className="border-b-[1px] border-solid shadow-lg border-gray-400 mt-4 rounded-md px-6 py-3" />
                        <button className="bg-blue-500 text-white p-2 rounded-md mt-4">Login</button>
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