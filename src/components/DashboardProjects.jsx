import projectphoto from "../assets/projectphoto.svg";
import projectphoto2 from "../assets/projectphoto2.svg";
import { Link } from "react-router-dom";

const DashboardProjects = () => {
  return (
    <div>
      <div className="flex gap-4 font-bold text-white p-10">
        <button className="bg-[#110A03] hover:bg-[#DA8450] text-white font-bold py-2 px-4 rounded">
          Funding Requests
        </button>
        <button className="bg-white hover:bg-[#DA8450] text-[#110A03] border-[#110A03] border-2 font-bold py-2 px-4 rounded">
          Funded Project
        </button>
      </div>
      <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
        <div className="grid place-items-center text-4xl font-bold text-white p-10">
          {" "}
          Projects
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center flex-wrap">
          <div className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-gray-200 rounded-lg mb-4 shadow-lg">
            <img
              src={projectphoto}
              alt="projectphoto"
              className="w-[100%] h-[237px] object-cover object-center rounded-lg "
            />

            <h3 className="text-[#110A03] font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] capitalise font-titiliumweb ">
              The Heavens Orphanage Home
            </h3>
            <p className="text-[#3B3B3B] lg:text-[15px] md:text-[15px] text-[13px] font-normal text-justify">
              We are commited to provide Love, support and opportunities for
              orphaned children who have faced unimaginable challenges at young
              age
            </p>
            <h3 className="text-[#110A03] lg:text-[15px] md:text-[15px] text-[13px] font-bold ">
              Amount Needed: $300
            </h3>
            <Link to="/dashboard/project-details">
              {" "}
              <button className="bg-[#110A03] hover:bg-[#DA8450] text-white font-bold py-2 px-4  rounded">
                View details
              </button>
            </Link>
          </div>

          <div className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-gray-200 rounded-lg mb-4 shadow-lg">
            <img
              src={projectphoto2}
              alt="projectphoto2"
              className="w-[100%] h-[237px] object-cover object-center rounded-lg"
            />

            <h3 className="text-[#110A03] font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] capitalise font-titiliumweb ">
              The Safeplace Home for elderly
            </h3>
            <p className="text-[#3B3B3B] lg:text-[15px] md:text-[15px] text-[13px] font-normal text-justify">
              We are commited to provide Love, support and opportunities for
              orphaned children who have faced unimaginable challenges at young
              age
            </p>
            <h3 className="text-[#110A03] lg:text-[15px] md:text-[15px] text-[13px] font-bold">
              Amount Needed: $300
            </h3>
            <button className="bg-[#110A03] hover:bg-[#DA8450] text-white font-bold py-2 px-4  rounded">
              View details
            </button>
          </div>

          <div className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4 border border-gray-200 rounded-lg mb-4 shadow-lg">
            <img
              src={projectphoto}
              alt="projectphoto"
              className="w-[100%] h-[237px] object-cover object-center rounded-lg"
            />

            <h3 className="text-[#110A03] font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] capitalise font-titiliumweb ">
              The Heavens Orphanage Home
            </h3>
            <p className="text-[#3B3B3B] lg:text-[15px] md:text-[15px] text-[13px] font-normal text-justify">
              We are commited to provide Love, support and opportunities for
              orphaned children who have faced unimaginable challenges at young
              age
            </p>
            <h3 className="text-[#110A03] lg:text-[15px] md:text-[15px] text-[13px] font-bold">
              Amount Needed: $300
            </h3>
            <button className="bg-[#110A03] hover:bg-[#DA8450] text-white font-bold py-2 px-4  rounded">
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProjects;
