import Review from "../shared/Review";

const Testimonial = () => {
  return (
    <div className="mx-6 md:mx-20 lg:mx-36 mt-32">
      <h2 className="text-[34px] font-semibold text-center">Testimonials</h2>

      <div className="mt-[60px] grid grid-cols-3 gap-10">
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Testimonial;
