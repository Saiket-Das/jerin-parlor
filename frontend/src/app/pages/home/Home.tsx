import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import Testimonial from "../../components/home/Testimonial";
import Footer from "../../components/shared/Footer";

const Home = () => {
  return (
    <div>
      <div className="mx-6 md:mx-20 lg:mx-36">
        <Hero />
        <Services />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
