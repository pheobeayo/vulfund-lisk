import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bg1 from "../assets/bg1.svg";
import bg2 from "../assets/bg2.svg";
import bg3 from "../assets/bg3.svg";



export function BackgroundCarousel() {

 

  return (

    <Carousel
      autoPlay
      
    >
     
      <div>
        <img alt="bg2" src={bg2} />

      </div>
      <div >
        <img alt="bg3" src={bg3} />

      </div>
      <div >
        <img alt="bg1" src={bg1} />

      </div>
    </Carousel>

  );

}
