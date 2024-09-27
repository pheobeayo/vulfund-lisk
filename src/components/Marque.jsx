import marque3 from "../assets/marque3.png";
import marque7 from "../assets/marque7.jpeg"

const Marque = () => {
    return (

        <div className="relative flex overflow-x-hidden">
            <div className="py-12 animate-marquee whitespace-nowrap flex gap-28">
                
                <img src={marque7} alt="marque7" className='h-[100px]  w-[100px]'/>
                <img src={marque3} alt="marque3" className='h-[100px]  w-[100px]'/>
                
            </div>


        </div>


    );
};

export default Marque;
