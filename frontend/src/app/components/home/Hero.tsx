import AppButton from "../shared/AppButton";

import heroImg from "../../assets/images/Hero/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-white my-10 mx-6 md:mx-20 lg:mx-36">
      <div className="lg:flex justify-around gap-32">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-5xl">
            BEAUTY SALON
          </h1>
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-5xl">
            FOR EVERY WOMEN
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-md">
            Our committed and competent team is here to help keep your hair,
            nails, skin, and body healthy and beautiful.
          </p>

          <AppButton navigate="/home">Get an appointment</AppButton>
        </div>
        <div className="mt-5 lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={heroImg}
            alt="mockup"
            className="rounded-md lg:h-[478px] lg:w-[484px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
