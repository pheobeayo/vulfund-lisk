import DonorsBanner from "../../components/DonorsBanner";
import ProjectDonate from "../../components/ProjectDonate";
import DonateProjects from "../../components/DonateProjects";




const Donate = () => {

    return (

        <main className="bg-white">
            <DonorsBanner/>
            <ProjectDonate/>
            <DonateProjects/>
           
        </main>

    );
};

export default Donate;