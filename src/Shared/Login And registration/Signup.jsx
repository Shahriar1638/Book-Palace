import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="grid grid-cols-7">
            <div className="col-span-5 h-screen pl-44">
                <div className="flex flex-col items-start justify-center h-full">
                    <h1 className="text-4xl font-bold">Create to your account</h1>
                    <form className="flex flex-col mt-10 w-[46rem]">
                        <input type="text" placeholder="Your email" name="email" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md px-6 py-3" />
                        <input type="password" placeholder="Your password" name="password" className="border-b-[1px] border-solid shadow-lg border-gray-400 mt-4 rounded-md px-6 py-3" />
                        <button className="bg-blue-500 text-white p-2 rounded-md mt-4">Sign up</button>
                    </form>
                    <div>
                        <h1>Already have an account ? <span className="text-blue-500 underline"> <Link to={"/login"}> go to log in</Link></span></h1>
                    </div>
                </div>
            </div>
            <div className="col-span-2 h-screen bg-purple-500">
            </div>
        </div>
    );
};

export default Signup;