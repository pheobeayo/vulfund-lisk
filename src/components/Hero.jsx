import { BackgroundCarousel } from "./backgroundcarousel";


const Hero = () => {
  return (
    <main>
      <section className="relative ">
        <figure className="relative  transition-all duration-500 cursor-pointer filter [#DA8450] hover:[#DA8450] w-full">
          <BackgroundCarousel />
          <figcaption className="absolute bottom-96 mx-24  gap-8">
            <div className="lg:w-[80%] md:w-[80%] w-[100vw] mx-auto text-center my-12 px-4 lg:px-0 md:px-0">
              <h1 className="text-white lg:text-[50px] md:text-[50px] text-[28px] font-[700] my-4 font-serif ">
                Empowering Vulnerable Individuals and Institutions
              </h1>
              <p className="lg:text-[24px] md:text-[24px] text-[18px] text-white">
                Transparent and impactful crowdfunding for
                <br /> disadvantaged individuals and organisations
                <br /> across Africa
              </p>
              
            </div>
          </figcaption>
        </figure>
      </section>
    </main>
  );
};

export default Hero;
