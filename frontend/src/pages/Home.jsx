import ServicesSection from "../components/Sections/ServicesSection";
import Hero from "../components/Sections/Hero";

const Home = () => {
  return (
    <div className="mt-0 min-h-screen bg-gpblack text-white">
      <Hero />
      <ServicesSection />
    </div>
  );
};

export default Home;
