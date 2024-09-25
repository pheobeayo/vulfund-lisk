


const ProjectDonate = () => {
    return (
        <main className="bg-white">
            <h1 className="text-[#110A03] font-serif font-bold text-xl mt-4">Welcome to Vulfund donation</h1>
            <p className="text-[#3B3B3B]">Your total fund donation till date is $250. Thank you for Supporting the less Privileged</p>
            <form className="w-full mx-auto">
                <label className="block mb-2 text-sm font-medium text-[#3B3B3B]">Enter donation amount</label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-[#795548] rounded-s-md">
                        <button className="bg-white font-bold py-2 px-4 border-[#795548] rounded text-[#795548]">
                            USD
                        </button>
                    </span>
                    <input type="text" id="amount" className="rounded-none rounded-e-lg bg-white border border-[#110A03] text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5  dark:placeholder-gray-400 dark:text-white " placeholder="Enter donation amount" />
                </div>
                <p className="text-[#110A03] font-serif font-bold text-xl mt-4 mb-4">Become a DAO member, donate $100 and above</p>
                <button className="bg-[#110A03] hover:bg-[#DA8450] text-white font-bold py-2 px-4 rounded w-full">
                    Send Donation
                </button>
            </form>
        </main>
    );
};

export default ProjectDonate;
