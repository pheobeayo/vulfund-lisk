import { BackgroundCarousel } from "./backgroundcarousel";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { MdOutlineArrowDropDown } from "react-icons/md";




const Hero = () => {
    return (
        <main >
            <section className="relative ">
                <figure className="relative  transition-all duration-500 cursor-pointer filter [#DA8450] hover:[#DA8450] w-full">
                    <BackgroundCarousel />
                    <figcaption className="absolute bottom-96 mx-24  gap-8">
                        <div className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto text-center my-12 px-4 lg:px-0 md:px-0">
                            <h1 className="text-white lg:text-[50px] md:text-[50px] text-[28px] font-[700] my-4 font-serif ">Empowering Vulnerable Individuals and Institutions</h1>
                            <p className="lg:text-[24px] md:text-[24px] text-[18px] text-white">Transparent and impactful crowdfunding for
                                <br />  disadvantaged individuals and organisations
                                <br /> across Africa
                            </p>
                            <div className="mt-4">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5  bg-[#110A03] rounded-lg p-4 font-semibold text-white shadow-sm ring-1 ring-inset ring-[#DA8450] hover:bg-[#DA8450]  lg:text-[20px] md:text-[20px] text-[18px]">
                                            Get Started
                                            <MdOutlineArrowDropDown aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                                        </MenuButton>
                                    </div>

                                    <MenuItems
                                        transition
                                        className="bg-[#110A03] absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#110A03 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div className="py-1">
                                            <MenuItem>
                                                <Link
                                                    to="/sign_in"
                                                    className="block px-4 py-2 text-sm text-[#DA8450] data-[focus]:bg-[#DA8450] data-[focus]:text-white"
                                                >
                                                    Proceed as a Requesting Organization
                                                </Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link
                                                    to="/donorsdashboard"
                                                    className="block px-4 py-2 text-sm text-[#DA8450] data-[focus]:bg-[#DA8450] data-[focus]:text-white"
                                                >
                                                    Proceed as a Donor
                                                </Link>
                                            </MenuItem>


                                        </div>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </section>
        </main>
    );
};

export default Hero;
