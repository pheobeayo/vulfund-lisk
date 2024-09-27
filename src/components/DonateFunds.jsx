import React from "react";
import { Button } from "@headlessui/react";
import { getVulfundContract } from "../constants/contract";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers, parseEther } from "ethers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isSupportedChain } from "../connection";

const DonateFunds = ({ amount, setAmount }) => {

  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  async function handleDonate() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getVulfundContract(signer);

    try {
      const amountVal = ethers.parseUnits(amount, 18);
      const transaction = await contract.donate({ value: amountVal });
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Donation successful!", {
          position: "top-center",
        });
      }

      toast.error("Donation failed", {
        position: "top-center",
      });
    } catch (error) {
      console.error(error);
      toast.error("Donation failed!", {
        position: "top-center",
      });
    } finally {
        setAmount('')
    }
  }

  return (
    <div>
      <Button
        className="bg-[#110A03] hover:bg-[#DA8450] text-white font-bold py-2 px-4 rounded w-full"
        onClick={handleDonate}
      >
        Send Donation
      </Button>
    </div>
  );
};

export default DonateFunds;
