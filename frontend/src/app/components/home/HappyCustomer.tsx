import Button from "../shared/AppButton";
import heroImg from "../../assets/images/Hero/hero.jpg";

const HappyCustomer = () => {
  return (
    <section className="pt-32 pb-24 bg-base-200 px-6 md:px-20 lg:px-36">
      <div className="lg:flex justify-around gap-32">
        <div className="mt-5 lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={heroImg}
            alt="mockup"
            className="rounded-md lg:h-[478px] lg:w-[484px]"
          />
        </div>

        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl">
            BEAUTY SALON
          </h1>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl">
            FOR EVERY WOMEN
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-md">
            Our committed and competent team is here to help keep your hair,
            nails, skin, and body healthy and beautiful. ·
          </p>

          <Button navigate="/home">Get an appointment</Button>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomer;
