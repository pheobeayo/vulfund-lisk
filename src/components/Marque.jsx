import marque from "../assets/marque.svg";
import marque2 from "../assets/marque2.jpg";
import marque3 from "../assets/marque3.png";
import marque4 from "../assets/marque4.png";
import marque5 from "../assets/marque5.png";
import marque6 from "../assets/marque6.png";

const Marque = () => {
    return (

        <div className="relative flex overflow-x-hidden">
            <div className="py-12 animate-marquee whitespace-nowrap flex gap-16">
                <img src={marque} alt="marque"  className='h-[70px] w-[100px]' />
                <img src={marque2} alt="marque2" className='h-[70px]  w-[100px]'/>
                <img src={marque3} alt="marque3" className='h-[70px]  w-[100px]'/>
                <img src={marque4} alt="marque4" className='h-[70px]  w-[100px]'/>
                <img src={marque5} alt="marque5" className='h-[70px]  w-[150px]'/>
                <img src={marque6} alt="marque6" className='h-[70px]  w-[100px]'/>
            </div>


        </div>


    );
};

export default Marque;
