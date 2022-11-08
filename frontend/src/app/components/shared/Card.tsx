import faceCare from "../../assets/images/face-care.png";

const Card = () => {
  return (
    <div className="card w-[370px] bg-base-100 hover:shadow-xl px-5">
      <div className="pt-7 flex justify-center ">
        <figure className="bg-primary h-16 w-16 rounded-full">
          <img src={faceCare} alt="Shoes" className="rounded-xl w-12 h-12" />
        </figure>
      </div>
      <div className="flex justify-center px-6 pb-6">
        <div className="text-center m-0">
          <h2 className="font-semibold text-xl pt-5">Hair Color & Styleing</h2>
          <p className="font-medium text-xl text-primary p-2">$99</p>
          <p className="font-light text-gray-400">
            Amazing flyers, social media posts and brand representations that
            would make your brand stand out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
