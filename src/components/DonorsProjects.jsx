// src/components/DashboardProjects.jsx

import React from "react";
import { Link } from "react-router-dom";
import useGetOrganization from "../Hooks/useGetOrganization";
import useGetProposals from "../Hooks/useGetProposals";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const DonorsProjects = () => {
  const allOrganization = useGetOrganization();
  const allProposals = useGetProposals()
  const { address } = useWeb3ModalAccount();

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
    <div>
      <div className="flex gap-4 font-bold text-white p-10">
        <button className="bg-[#110A03] hover:bg-[#FF7827] text-white font-bold py-2 px-4 rounded">
          All Projects
        </button>
        <button className="bg-white hover:bg-[#FF7827] text-[#110A03] border-[#110A03] border-2 font-bold py-2 px-4 rounded">
          Available Projects
        </button>
        <button className="bg-white hover:bg-[#FF7827] text-[#110A03] border-[#110A03] border-2 font-bold py-2 px-4 rounded">
          Voted Projects
        </button>
        <button className="bg-white hover:bg-[#FF7827] text-[#110A03] border-[#110A03] border-2 font-bold py-2 px-4 rounded">
          Funded Projects
        </button>
      </div>
      <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
        <div className="grid place-items-center text-4xl font-bold text-white p-10">
          Projects
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between flex-wrap">
        {allProposals.length > 0 ? (
          allProposals.map((item, index) => (
              <div
                key={index} 
                className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-gray-200 rounded-lg mb-4 shadow-lg"
              >
                {address === item.beneficiary ? (
                  <img
                    src={imageUrl}
                    alt="projectphoto"
                    className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                  />
                ) : (
                  <img
                    src="https://images.pexels.com/photos/5324986/pexels-photo-5324986.jpeg?auto=compress&cs=tinysrgb&w=800"
                    className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                    alt="default project"
                  />
                )}

                {address === item.beneficiary ? (
                  <h3 className="text-[#110A03] font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] capitalise font-titiliumweb ">
                    {allOrganization[2]}
                  </h3>
                ) : (
                  <p className="text-[#110A03] font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] capitalise font-titiliumweb ">...</p>
                )}

               {address === item.beneficiary ? ( <p className="text-[#3B3B3B] lg:text-[15px] md:text-[15px] text-[13px] font-normal text-justify">
                {item.description.slice(0, 30)}...
                </p>) : (<p>...</p>)}
                <h3 className="text-[#110A03] lg:text-[15px] md:text-[15px] text-[13px] font-bold">
                  Amount Needed: {convertToWholeNumber(item.amount)} ETH
                </h3>
                <Link to={`${index}`}>
                  <button className="bg-[#110A03] hover:bg-[#11785A] text-white font-bold py-2 px-4 rounded">
                    View details
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonorsProjects;
