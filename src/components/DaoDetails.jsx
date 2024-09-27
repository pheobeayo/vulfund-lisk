

const DaoDetails = () => {
    return (
        <div>
            <div className="flex gap-4 font-bold text-white p-10">
                <button className="bg-[#110A03] hover:bg-[#110A03] text-white font-bold py-2 px-4 rounded">
                Funded Projects
                </button>
                <button className="bg-white hover:bg-[#FF7827] text-[#110A03] border-[#110A03] border-2 font-bold py-2 px-4 rounded">
                   Projects Awaiting Funding
                </button>
                <button className="bg-white hover:bg-[#FF7827] text-[#110A03] border-[#110A03] border-2 font-bold py-2 px-4 rounded">
                   Dao Members
                </button>
            </div>
           
        </div>
    );
};

export default DaoDetails;
