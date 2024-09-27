import { useState } from "react";
import { getProvider } from "../constants/providers";
import { isSupportedChain } from "../connection";
import { getVulfundContract } from "../constants/contract";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers, parseUnits } from "ethers";

const RequestForm = () => {
  const [userAddress, setUserAddress] = useState(null);
  const [requestTopic, setRequestTopic] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  async function handleRequest() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();
    const contract = getVulfundContract(signer);

    try {
      const amountVal = ethers.parseUnits(amount, 18);

      const transaction = await contract.createProposal(
        requestTopic,
        description,
        userAddress,
        amountVal
      );
      console.log(transaction)
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Request Creation Successful!", {
          position: "top-center",
        });
      }

      toast.error("Request Creation Failed", {
        position: "top-center",
      });
    } catch (error) {
      console.error(error);
      toast.error("Request Creation Failed!", {
        position: "top-center",
      });
    } finally {
      setAmount("")
      setDescription("")
      setRequestTopic("")
      setUserAddress("")
    }
  }


  return (
    <main className="bg-white">
      <div className="w-1/2 mx-auto mt-20">
      <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-[#110A03] dark:text-[#110A03]">
            Add a Request Topic
          </label>
          <input
           className="bg-white border border-[#110A03] text-[#110A03] text-sm rounded-lg focus:ring-[#110A03] focus:border-[#110A03] block w-full p-2.5  "
            placeholder="Request Topic"
            id="user_avatar"
            type="text"
            onChange={(e) => setRequestTopic(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-[#110A03] dark:text-[#110A03]">
            Amount Needed
          </label>
          <input
            type="text"
            id="amount"
            className="bg-white border border-[#110A03] text-[#3B3B3B] text-sm rounded-lg focus:ring-[#110A03] focus:border-[#110A03] block w-full p-2.5"
            placeholder="Amount Needed"
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-[#110A03] dark:text-[#110A03]">
            Description: Purpose of Funding(This should include the number of
            residents)
          </label>
          <input
            type="text"
            id="description"
            className="bg-white border border-[#110A03] text-[#110A03] text-sm rounded-lg focus:ring-[#110A03] focus:border-[#110A03] block w-full p-2.5  "
            placeholder="How the fund will be used"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-2 text-sm font-medium text-[#110A03] dark:text-[#110A03]">
            Funding Wallet
          </label>
          <input
            type="text"
            id="description"
            className="bg-white border border-[#110A03] text-[#110A03] text-sm rounded-lg focus:ring-[#110A03] focus:border-[#110A03] block w-full p-2.5  "
            placeholder="kindly supply your funding wallet"
            required
            onChange={(e) => setUserAddress(e.target.value)}
          />
        </div>
        <button className="bg-[#110A03] hover:bg-[#DA8450] text-white font-bold py-2 px-4 rounded w-full" onClick={handleRequest}>
          Submit
        </button>
      </div>
    </main>
  );
};

export default RequestForm;
