import { CgHomeAlt } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { GoProjectSymlink } from "react-icons/go";
import { GiReceiveMoney } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';


const Sidebar = () => {
    const activeStyle = {
        borderLeft: '1px solid #DA8450',
        borderRight: '1px solid #DA8450',
        width: '100%',
        padding: '20px'
      };
    



    return (
        
        <div className='bg-[#110A03]  w-[20%] text-white p-8 py-12 h-[190vh]'>
            {/* <div className="grid place-items-center">
            <img src={logo} alt='logo' className="mb-20" />
            </div>
            <NavLink to="/dashboard" className="text-[16px] text-white flex items-center  py-4 mb-4 px-6  hover:text-[#FF7827]"  style={({isActive}) => isActive ? activeStyle : null } end><CgHomeAlt className="mr-4" />Dashboard</NavLink>
            <NavLink to="projects" className="text-[16px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#FF7827]"  style={({isActive}) => isActive ? activeStyle : null }><GoProjectSymlink  className="mr-4" /> Projects</NavLink>
            <NavLink to="request_fund" className="text-[16px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#FF7827]"  style={({isActive}) => isActive ? activeStyle : null }><GiReceiveMoney className="mr-4" /> Request Fund</NavLink>
            <NavLink to="project-details" className="text-[16px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#FF7827]"  style={({isActive}) => isActive ? activeStyle : null } ><GoProjectSymlink  className="mr-4" /> Project Details</NavLink>
            <NavLink to="funded-projects" className="text-[16px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#FF7827]"  style={({isActive}) => isActive ? activeStyle : null } ><GoProjectSymlink  className="mr-4" /> Funded Projects</NavLink>
           <button className="bg-[#DA8450] text-[16px] text-white  flex items-center py-4 mb-4 px-6  hover:text-[#FF7827]">< CiLogout className="mr-4" /> Log out</button>
            <p className="text-white mt-16">&copy; Vulfund 2024</p> */}
        </div>
        
    );
}

export default Sidebar;