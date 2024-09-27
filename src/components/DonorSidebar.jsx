import { CgHomeAlt } from "react-icons/cg";
import { LuCircleDollarSign } from "react-icons/lu";
import { CgCommunity } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { GoProjectSymlink } from "react-icons/go";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import useGetOrganization from "../Hooks/useGetOrganization";
import { GiReceiveMoney } from "react-icons/gi";
import { MdCreateNewFolder } from "react-icons/md";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const DonorSidebar = () => {
  const allOrganization = useGetOrganization();
  const { address } = useWeb3ModalAccount()

  const activeStyle = {
    borderLeft: "1px solid #DA8450",
    borderRight: "1px solid #DA8450",
    width: "100%",
    padding: "20px",
  };

  return (
    <div className="bg-[#110A03] w-[20%] text-white p-8 py-12 h-[190vh]">
      <div className="grid place-items-center">
        <img src={logo} alt="logo" className="mb-20" />
      </div>
      <NavLink
        to="/dashboard"
        className="text-[16px] text-white flex items-center py-4 mb-4 px-4 hover:text-[#FF7827]"
        style={({ isActive }) => (isActive ? activeStyle : null)}
        end
      >
        <CgHomeAlt className="mr-4" />
        Dashboard
      </NavLink>
      <NavLink
        to="projects"
        className="text-[16px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#FF7827]"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <GoProjectSymlink className="mr-4" /> Projects
      </NavLink>
      <NavLink
        to="donate"
        className="text-[16px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#FF7827]"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <LuCircleDollarSign className="mr-4" />
        Donate
      </NavLink>
      {allOrganization[0] === address && (
        <NavLink
          to="request_fund"
          className="text-[16px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#FF7827]"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <GiReceiveMoney className="mr-4" /> Request Funds
        </NavLink>
      )}
        {allOrganization[0] === address && (<NavLink
        to="organization"
        className="text-[16px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#FF7827]"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <CgCommunity className="mr-4" /> Organization
      </NavLink>)}
      <NavLink
        to="dao"
        className="text-[16px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#FF7827]"
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        <CgCommunity className="mr-4" /> Dao
      </NavLink>
      {allOrganization[0] !== address && (
        <NavLink
          to="signin"
          className="text-[16px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#FF7827]"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          <MdCreateNewFolder className="mr-4" /> Register
        </NavLink>
      )}
      <button className="bg-[#DA8450] text-[16px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#FF7827]">
        <CiLogout className="mr-4" /> Log out
      </button>
      <p className="text-white mt-16">&copy; Vulfund 2024</p>
    </div>
  );
};

export default DonorSidebar;
