import { useEffect, useState } from "react";
import Card from "../shared/Card";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-32 mb-24 mx-6 md:mx-20 lg:mx-36">
      <h2 className="text-[34px] font-semibold text-center">
        Our Awesome <span className="text-primary">Services</span>
      </h2>

      <div className="mt-[72px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <Card key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
