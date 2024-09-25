



const RequestForm = () => {


    return (
        <main className="bg-white">

            <form className="w-1/2 mx-auto mt-20">
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-[#110A03] dark:text-[#110A03]">Amount Needed</label>
                    <input type="amount" id="amount" className="bg-white border border-[#110A03] text-[#3B3B3B] text-sm rounded-lg focus:ring-[#110A03] focus:border-[#110A03] block w-full p-2.5" placeholder="Amount Needed" required />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-[#110A03] dark:text-[#110A03]">Description: Purpose of Funding(This should include the number of residents)</label>
                    <input type="text" id="description" className="bg-white border border-[#110A03] text-[#110A03] text-sm rounded-lg focus:ring-[#110A03] focus:border-[#110A03] block w-full p-2.5  " placeholder="How the fund will be used" required />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-[#110A03] dark:text-[#110A03]">Funding Wallet</label>
                    <input type="text" id="description" className="bg-white border border-[#110A03] text-[#110A03] text-sm rounded-lg focus:ring-[#110A03] focus:border-[#110A03] block w-full p-2.5  " placeholder="kindly supply your funding wallet" required />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-[#110A03] dark:text-[#110A03]">Attach a supporting document (optional)</label>
                    <input className="block w-full text-sm text-[#110A03] border border-[#110A03] rounded-lg cursor-pointer bg-white dark:text-[#110A03] focus:outline-none  dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"></input>
                </div>
                <button className="bg-[#110A03] hover:bg-[#DA8450] text-white font-bold py-2 px-4 rounded w-full">
                    Submit
                </button>
            </form>
        </main>
    );
};

export default RequestForm;