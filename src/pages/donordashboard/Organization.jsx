import React, { useEffect, useState, useCallback } from 'react';
import DashboardUpper from '../../components/dashboardUpper';
import { Link } from 'react-router-dom';
import useGetOrganization from '../../Hooks/useGetOrganization';
import useGetProposals from '../../Hooks/useGetProposals'; // Ensure this hook is imported
import { useWeb3ModalAccount } from '@web3modal/ethers/react'; // Import the hook

const Organization = () => {
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
    <main className="bg-white">
      <DashboardUpper />
      <div className="flex lg:flex-row md:flex-row flex-col justify-between flex-wrap">
      {allProposals.length > 0 ? (
          allProposals.map((item, index) => (
            address === item.beneficiary && ( 
              <div
                key={item.id}
                className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-gray-200 rounded-lg mb-4 shadow-lg"
              >
                <img
                  src={imageUrl}
                  alt="projectphoto"
                  className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                />
                <h3 className="text-[#110A03] font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] capitalize font-titiliumweb">
                  {allOrganization[2]}
                </h3>

                <p className="text-[#3B3B3B] lg:text-[15px] md:text-[15px] text-[13px] font-normal text-justify">
                  {item.description.slice(0, 30)}...
                </p>
                <h3 className="text-[#110A03] lg:text-[15px] md:text-[15px] text-[13px] font-bold">
                  Amount Needed: {convertToWholeNumber(item.amount)} ETH
                </h3>
                <Link to={`${index}`}>
                  <button className="bg-[#110A03] hover:bg-[#11785A] text-white font-bold py-2 px-4 rounded">
                    View details
                  </button>
                </Link>
              </div>
            )
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </main>
  );
};

export default Organization;