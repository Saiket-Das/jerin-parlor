import HappyCustomer from "../../components/home/HappyCustomer";
import Hero from "../../components/home/Hero";
import Services from "../../components/home/Services";
import Testimonial from "../../components/home/Testimonial";
import Footer from "../../components/shared/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <Services />
        <HappyCustomer />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
