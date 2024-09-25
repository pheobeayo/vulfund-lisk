

const SigninDetails = () => {




    return (
        <div className="w-screen">


            <div className='grid place-items-center bg-white'>
                <div className='w-1/2 p-8 rounded-lg text-[#110A03] flex flex-col items-center bg-white lg:w-[30%] md:w-[30%]  mx-auto'>
                <h1 className="text-3xl font-serif text-[#110A03] font-bold mt-16">Sign up</h1>
                    <label className=" block mt-4 mb-2 text-base font-bold text-[#110A03] dark:text-[#110A03] text-center"> Upload Organization Image </label>
                    <input type='file' placeholder='Organization Image' className="bg-white font-bold border border-[#110A03] text-[#110A03] text-sm rounded-lg focus:ring-[#3B3B3B] focus:border-[#110A03] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none" />
                    <input type="text" placeholder='Organization Name' className="bg-white  border border-[#110A03] text-[#110A03] text-sm font-bold rounded-lg focus:ring-[#3B3B3B] focus:border-[#110A03] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none" />
                    <label className="block mt-2 mb-2 text-sm font-bold text-[#110A03] dark:text-[#110A03] text-center "> Upload Documents containing details of your organization</label>
                    <input type="file" placeholder='Attach the all details of your organization' className="bg-white font-bold border border-[#3B3B3B] text-[#3B3B3B] text-sm rounded-lg focus:ring-[#3B3B3B] focus:border-[#015C28] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none"/>
                    <button className="bg-[#110A03] hover:bg-[#DA8450] text-white py-2 px-4 rounded  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] my-4">Sign up</button>
                </div>
            </div>

        </div>
    )
}

export default SigninDetails;