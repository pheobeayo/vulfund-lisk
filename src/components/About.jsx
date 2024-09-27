import aboutimage from "../assets/aboutimage.svg";

const About = () => {
    return (
        <div className="bg-white">

            <h2 className="text-[#110A03] lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 text-center mb-12">
                About us
            </h2>
            <div>
                <div className="flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
                    <div className="lg:w-[45%] md:w-[45%] w-[100%]">
                        <img
                            src={aboutimage}
                            alt="aboutimage"
                            className="w-[100%] p-12"
                        />
                    </div>
                    <ul className="text-[#015C28]lg:w-[50%] md:w-[50%] w-[90%] p-8 text-justify">
                        <h1 className=" text-[#110A03] lg:text-[20px] md:text-[20px] text-[15px] text-justify font-[600]" >Empowering the Vulnerables</h1>
                        <li className=" text-[#110A03] lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4 text-justify">
                            Vulfund is a blockchain-based platform that leverages the power of Decentralized Autonomous Organizations (DAOs) to facilitate transparent
                            and impactful crowdfunding for disadvantaged individuals and institutions in Africa across Africa. It empowers users to directly support
                            orphanages, senior citizen homes, homes for disabled individuals, and other underprivileged groups in Africa by crowdfunding and voting on
                            funding requests from registered vulnerable institutions.
                        </li>
                        <li className=" text-[#110A03] lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4">
                            We utilize blockchain technology to create a transparent and secure platform, eliminating intermediaries and ensuring all
                            donations reach their intended recipients.
                        </li>
                        <li className=" text-[#110A03] lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4">
                            We empower donors through NFT membership (granted for donations of $250 or more) to collectively decide
                            on funding allocation through community voting.
                        </li>
                        <li className="text-[#110A03] lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4">
                            Providing a platform for underprivileged institutions to register their needs and receive direct financial support for essential needs like food, healthcare, education,
                            and skills training from a global crowdfunding community
                        </li>
                    </ul>


                </div>
            </div>
        </div >
    );
};

export default About;
