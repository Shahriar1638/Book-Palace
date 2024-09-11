const Dashboard = () => {
    return (
        <div className="bg-[#0C0C0C] h-dvh">
            <h1 className="h-28 my-auto py-5 text-center text-5xl font-bold uppercase text-[#F2613F]">Welcome To dashboard</h1>
            <div className="grid grid-cols-9">
                <div className="col-span-2 flex flex-col items-start justify-start text-[#F2613F] mx-20">
                    <h1 className="my-4 text-lg font-semibold uppercase ">Home</h1>
                    <h1 className="my-4 text-lg font-semibold uppercase ">report list</h1>
                    <h1 className="my-4 text-lg font-semibold uppercase ">pending list</h1>
                </div>
                <div className="col-span-7 bg-white text-[#0c0c0c] rounded-tl-xl">

                </div>
            </div>
        </div>
    );
};

export default Dashboard;