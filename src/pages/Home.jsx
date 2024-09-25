import About from "../components/About";
import Hero from "../components/Hero";
import Marque from "../components/Marque";
import Project from "../components/Project";





const Home = () => {
  return (
    <main className="bg-white">
      <section className="w-[100vw]  bg-white">
        <Hero />
        <About />
        <Project />
        <Marque />
      </section>
    </main>
  );
};

export default Home;
