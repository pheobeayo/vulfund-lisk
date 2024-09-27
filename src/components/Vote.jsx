import React from "react";
import { useState } from "react";
import { getVulfundContract } from "../constants/contract";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers, parseUnits } from "ethers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isSupportedChain } from "../connection";
import { Modal, Box } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 10,
  boxShadow: 24,
  border: "1px solid #42714262",
  backgroundColor: "#1E1D34",
  p: 4,
};

const Vote = ({ id }) => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();


  async function handleVote() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const contract = getVulfundContract(signer);

    try {
      const transaction = await contract.vote(id);
      const receipt = await transaction.wait();

      if (receipt.status) {
        return toast.success("Vote successful!", {
          position: "top-center",
        });
      }

      toast.error("Vote failed", {
        position: "top-center",
      });
    } catch (error) {
      console.error(error);
      toast.error("Vote failed!", {
        position: "top-center",
      });
    }
  }

  return (
    <div>
      <input
        type="text"
        value={Number(id)}
        className="text-white rounded-lg w-[100%] p-4 bg-[#ffffff23] border border-white/50 backdrop-blur-lg mb-4 outline-none hidden"
        readonly
      />
      <button
        className="bg-[#110A03] hover:bg-[#DA8450] text-white py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px]  my-2 hover:font-bold mr-4"
        onClick={handleVote}
      >
        Vote
      </button>
    </div>
  );
};

export default Vote;
