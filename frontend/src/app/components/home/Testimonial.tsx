import { Review } from "../shared/index";

const Testimonial = () => {
  return (
    <div className="mx-6 md:mx-20 lg:mx-36 mt-16">
      <h2 className="text-[34px] font-semibold text-center">Testimonials</h2>

      <div className="mt-10 lg:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-10">
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Testimonial;
