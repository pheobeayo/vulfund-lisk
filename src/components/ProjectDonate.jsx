import DonateFunds from "./DonateFunds";
import { useState } from "react";

const ProjectDonate = () => {
    const [amount, setAmount] = useState(0)

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
                    <input type="text" id="amount" className="rounded-none rounded-e-lg bg-white border border-[#110A03] text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="Enter donation amount" onChange={(e) => setAmount(e.target.value)} />
                </div>
                <p className="text-[#110A03] font-serif font-bold text-xl mt-4 mb-4">Become a DAO member, donate $100 and above</p>
                <DonateFunds amount={amount} setAmount={setAmount} />
            </form>
        </main>
    );
};

export default ProjectDonate;
