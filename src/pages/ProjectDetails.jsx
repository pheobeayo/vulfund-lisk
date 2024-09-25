import DonorsBanner from "../components/DonorsBanner";
import ProjectDetail from "../components/ProjectDetail";
import Sidebar from "../components/Sidebar";





const ProjectDetails = () => {
  return (
    <main className="bg-white">
      <div className="flex bg-white">
        <Sidebar/>
      <div className="px-6 w-[100%] lg:w-[77%] md:w-[77%] h-auto lg:h-[100vh] md:h-[80vh] overflow-y-scroll">
      <div className="mt-4">
      <DonorsBanner/>
      </div>
        
      <div className="flex mb-8 mt-4 justify-end">
       
     <ProjectDetail/> 
     </div>  
     </div>
     </div>
    </main>
  );
};

export default ProjectDetails;
