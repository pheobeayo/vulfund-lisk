import projectphoto from "../assets/projectphoto.svg";
import { Link,NavLink } from "react-router-dom";

const ProjectDetail = () => {
    return (
        <div className="p-8">
            <img src={projectphoto} alt="projectphoto" className="rounded-t-lg " />
            <h1 className="text-[#110A03] font-serif font-bold text-xl">The Safeplace Home for Elderly</h1>
            <Link>Download your Organization Documents here </Link>
            <h2 className="text-[#110A03] font-serif font-bold text-xl">Proposal</h2>

            <p className="text-[#3B3B3B] font-medium">Need Description
                </p>

            <p className="text-[#3B3B3B] font-medium"><span className="text-[#015C28]">Total Amount Needed:</span>  $500
                <br /><span className="text-[#110A03]">Total Donation Received:</span> $200
                <br /><span className="text-[#110A03]">Funding Status:</span> Funded
                <br /><span className="text-[#110A03]">DAO Status:</span> 5 Votes
            </p>
            <div className='mt-6'>
            <button className="bg-[#110A03] hover:bg-[#11785A] text-white py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px]  my-2 hover:font-bold mr-4">
                Vote now
            </button>
          
                    <NavLink to='/donorsdashboard/donate' className="bg-[#DA8450] text-white py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] lg:w-[50%] md:w-[50%] my-2 hover:bg-green-300 hover:font-bold">Donate</NavLink>
                    
                </div>
            <p className="text-[#3B3B3B] font-medium"><span className="text-[#110A03]">Terms and Conditions:</span>
                Voting is applicable only to DAO members, make a donation of $100 and above to become a member
                <br />5 votes from a DAO releases the fund to homes/center
            </p>
        </div>
    );
};

export default ProjectDetail;
