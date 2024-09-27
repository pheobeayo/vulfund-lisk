import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer
            className="bg-gradient-to-r from-[#110A03] via-[#110A03] to-[#DA8450] text-white py-8 px-2">
            <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
                <div className="w-[50%] lg:items-start md:items-start">

                    <img src={logo} alt="logo" className="w-[295px] h-[60px]  mb-4" />

                </div>

                <div className="flex items-center justify-between flex-col lg:flex-row md:flex-row text-center lg:text-left md:text-left">

                    <div className="flex  justify-between flex-col lg:flex-row md:flex-row gap-4 mb-4 items-center">
                        <NavLink to='/' className=" text-white font-serif hover:text-[#FF7827] cursor-grab ">
                            Home
                        </NavLink>
                        <NavLink to='/about-us' className="  text-white font-serif hover:text-[#FF7827] cursor-grab ">
                            About us
                        </NavLink>
                        <NavLink to='/projects' className="  text-white font-serif hover:text-[#FF7827] cursor-grab ">
                            Projects
                        </NavLink>
                        <NavLink to='/donate' className=" text-white font-serif hover:text-[#FF7827] cursor-grab ">
                            Donate
                        </NavLink>
                        <NavLink to='/dao_community' className=" text-white font-serif hover:text-[#FF7827] cursor-grab ">
                            DAO Community
                        </NavLink>
                    </div>
                </div>

                <div className="flex gap-4 cursor-pointer items-center mb-4 mr-10">
                    <FaXTwitter />
                    <FaLinkedinIn />
                    <HiOutlineMail />
                    <FaInstagram />
                </div>



            </div>
        </footer>
    );
}
export default Footer;
