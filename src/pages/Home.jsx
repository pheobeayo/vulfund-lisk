import About from "../components/About";
import Hero from "../components/Hero";
import Marque from "../components/Marque";
import Project from "../components/Project";





const Home = () => {
  return (
    <main className="bg-white">
      
        <Hero />
        <About />
        <Project />
        <Marque />
      
    </main>
  );
};

export default Home;
