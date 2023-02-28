import { useEffect } from "react";

import Footer from "../../components/shared/Footer";

import {
  Hero,
  Services,
  HappyCustomer,
  Testimonial,
} from "../../components/home/index";
import Loading from "../../components/shared/Loading";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

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
