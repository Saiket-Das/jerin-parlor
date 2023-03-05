import { useEffect } from "react";

import { Footer } from "../../components/shared/index";

import {
  Hero,
  Services,
  HappyCustomer,
  Testimonial,
} from "../../components/home/index";

import useApi from "../../hooks/useApi";
import serviceApi from "../../api/service";

const Home = () => {
  // const serviceData = useApi(serviceApi.getServices);

  // useEffect(() => {
  //   serviceData.request();
  // }, []);

  // console.log(serviceData?.data.data);

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
