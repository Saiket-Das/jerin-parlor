import { Link } from "react-router-dom";
import AppButton from "../shared/AppButton";

import heroImg from "../../assets/images/Hero/7852121.jpg";

const Hero = () => {
  return (
    <div>
      <section className="bg-white mx-28 my-10">
        <div className="flex justify-around">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl">
              BEAUTY SALON
            </h1>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl">
              FOR EVERY WOMEN
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>

            <AppButton navigate="/home">Get an appointment</AppButton>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={heroImg}
              alt="mockup"
              className="rounded-md lg:h-[478px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
