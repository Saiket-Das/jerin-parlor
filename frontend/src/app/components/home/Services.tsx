import { useEffect } from "react";
import { ServiceCard } from "../shared/index";

import useApi from "../../hooks/useApi";
import serviceApi from "../../api/service";

const Services = () => {
  const serviceData = useApi(serviceApi.getServices);

  useEffect(() => {
    serviceData.request();
  }, []);

  return (
    <div className="mt-32 mb-24 mx-0 md:mx-20 lg:mx-36">
      <h2 className="text-[34px] font-semibold text-center">
        Our Awesome <span className="text-primary">Services</span>
      </h2>

      <div className="mt-10 lg:mt-[72px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-10">
        {serviceData?.data.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
