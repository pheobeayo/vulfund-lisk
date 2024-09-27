import bannerimage1 from '../assets/bannerimage1.svg';
import { NavLink } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row md:flex-row bg-[#110A03] rounded-[20px] w-[100%] text-white border-[#110A03] border-2'>
            <div className='lg:w-[60%] md:w-[60%] w-[100%] p-8'>
                <h2 className='lg:text-[24px] md:text-[24px] text-[18px] font-bold mb-4'>Vulfund - where blockchain meets transparency</h2>
                <p>facilitate transparent and impactful crowdfunding for disadvantaged individuals and institutions in Africa across Africa</p>
                <div className='mt-6'>
                    <NavLink to='/dashboard/donate' className="bg-[#DA8450] text-white py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] lg:w-[50%] md:w-[50%] my-2 hover:bg-[#110A03] hover:font-bold">Donate</NavLink>
                    
                </div>
            </div>
            <div className='lg:w-[40%] md:w-[40%] w-[100%] bg-white lg:rounded-tl-[50%] md:rounded-tl-[50%] lg:rounded-bl-[50%] rounded-tl-[50%] rounded-tr-[50%] text-right lg:rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] p-6 flex justify-center'>
                <img src={bannerimage1} alt="dashboard" className='w-[100%] lg:w-[60%] md:w-[60%]' />
            </div>
        </div>
    )
}

export default Banner