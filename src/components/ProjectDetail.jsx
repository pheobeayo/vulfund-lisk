import projectphoto from "../assets/projectphoto.svg";
import { Link,NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import useGetOrganization from "../Hooks/useGetOrganization";
import { useEffect, useState } from "react";
import { getProvider } from "../constants/providers";
import { isSupportedChain } from "../connection";
import { getVulfundContract } from "../constants/contract";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DirectFund from "./DirectFund";
import Vote from "./Vote";

const ProjectDetail = () => {
    const { id } = useParams()
    const { address } = useWeb3ModalAccount()
    const allOrganization = useGetOrganization()
    const [details, setDetails] = useState([])

    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    async function handleFetchDetails() {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();
        const contract = getVulfundContract(signer);
    
        try {
          const transaction = await contract.proposals(
            id
          );
          setDetails(transaction)
        } catch (error) {
          console.error(error);
        } 
      }

      useEffect(() => {
        handleFetchDetails()
      }, [id])

      const convertIpfsUrl = (url) => {
        if (url && url.startsWith("ipfs://")) {
          return url.replace("ipfs://", "https://ipfs.io/ipfs/");
        }
        return url || "";
      };
    
      const imageUrl = convertIpfsUrl(allOrganization[1]);

      const convertToWholeNumber = (formattedNumber) => {
        const number = parseFloat(formattedNumber);
        if (isNaN(number)) return "0";
        return Math.floor(number);
      };

    return (
        <div className="p-8">
            {address === details[0] ? (
                <img src={imageUrl} alt="projectphoto" className="rounded-t-lg " />
                ) : (<img src="https://images.pexels.com/photos/5324986/pexels-photo-5324986.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="rounded-t-lg " />)} 
            <h2 className="text-[#110A03] font-serif font-bold text-xl">{details.proposalTopic}</h2>

            <p className="text-[#3B3B3B] font-medium">{details.description}
                </p>

            <p className="text-[#3B3B3B] font-medium"><span className="text-[#015C28]">Total Amount Needed:</span>  {convertToWholeNumber(details.amount) / 1e18 }ETH
                <br /><span className="text-[#110A03]">Total Donation Received:</span> {convertToWholeNumber(details.balance) / 1e18} ETH
                <br /><span className="text-[#110A03]">Funding Status:</span> Funded
                <br /><span className="text-[#110A03]">DAO Status:</span> {Number(details.votes)} Votes
            </p>
            <div className='mt-6 flex'>
            {/* <button className="bg-[#110A03] hover:bg-[#DA8450] text-white py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px]  my-2 hover:font-bold mr-4">
                Vote now
            </button> */}
            <Vote id={id} />
                    <DirectFund id={id} />
                    
                </div>
            <p className="text-[#3B3B3B] font-medium"><span className="text-[#110A03]">Terms and Conditions:</span>
                Voting is applicable only to DAO members, make a donation of $100 and above to become a member
                <br />5 votes from a DAO releases the fund to homes/center
            </p>
        </div>
    );
};

export default ProjectDetail;
