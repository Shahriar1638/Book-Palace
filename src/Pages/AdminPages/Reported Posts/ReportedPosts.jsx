const ReportedPosts = () => {
    return (
        <div className="mx-20 mt-10">
            <h1 className="mb-10 text-4xl font-bold uppercase text-[#0c0c0c] text-start">Total pending to publish books</h1>
            <div className="">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="w-12"></th>
                            <th className="w-36 text-start">Post user name</th>
                            <th className="w-64 text-start">Post name</th>
                            <th className="w-24 text-start">Reports</th>
                            <th className="w-80 text-start"></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedPosts;