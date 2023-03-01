// import { useEffect, useState } from "react";
import { BookingListCard } from "../../../components/dashboard/index";

const BookingList = () => {
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("services.json")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  const services = [
    {
      _id: "1",
      name: "Anti Age Face Treatment",
      description:
        "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
      price: 199,
      imageUrl: "../src/app/assets/images/face-care.png",
      status: "Pending",
    },

    {
      _id: "2",
      name: "Hair Color & Styleing",
      description:
        "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
      price: 99,
      imageUrl: "../src/app/assets/images/hair-care.png",
      status: "Done",
    },

    {
      _id: "3",
      name: "Skin Care Treatment",
      description:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
      price: 299,
      imageUrl: "../src/app/assets/images/hair-care.png",
      status: "Pending",
    },
    {
      _id: "3",
      name: "Skin Care Treatment",
      description:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
      price: 299,
      imageUrl: "../src/app/assets/images/hair-care.png",
      status: "Done",
    },
    {
      _id: "3",
      name: "Skin Care Treatment",
      description:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
      price: 299,
      imageUrl: "../src/app/assets/images/hair-care.png",
      status: "Pending",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-10">
      {services.map((service, index) => (
        <BookingListCard key={index} service={service} />
      ))}
    </div>
  );
};

export default BookingList;
