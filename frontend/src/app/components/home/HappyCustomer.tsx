import Button from "../shared/AppButton";

import heroImg from "../../assets/images/Hero/hero.jpg";
import { Link } from "react-router-dom";

const HappyCustomer = () => {
  return (
    <section className="bg-base-200 px-6  md:px-20 lg:px-36">
      <div className="flex justify-center">
        <div className="absolute -m-6">
          <Link to="/dashboard">
            <Button>Explore more</Button>
          </Link>
        </div>
      </div>

      <div className="lg:flex justify-around gap-32 pt-32 pb-24">
        <div className="mt-5 lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={heroImg}
            alt="mockup"
            className="rounded-md lg:h-[478px] lg:w-[484px]"
          />
        </div>

        <div className="mr-auto place-self-center lg:col-span-7 mt-10 md:mt-10 lg:mt-0">
          <div className="max-w-2xl mb-4 text-3xl font-semibold tracking-tight leading-none md:text-4xl lg:text-4xl">
            <h2>Let us handle your</h2>
            <h2 className="mt-2">
              skin <span className="text-primary">Professionally.</span>
            </h2>
          </div>
          <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-md">
            Our committed and competent team is here to help keep your hair,
            nails, skin, and body healthy and beautiful. Our committed and
            competent team is here to help keep your hair, nails, skin, and body
            healthy and beautiful.
          </p>

          <div className="flex gap-10">
            <div>
              <h3 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl lg:text-4xl text-primary">
                500+
              </h3>
              <p>Happy customer</p>
            </div>
            <div>
              <h3 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl lg:text-4xl text-primary">
                16+
              </h3>
              <p>Total services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomer;
