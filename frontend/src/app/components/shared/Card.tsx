import faceCare from "../../assets/images/face-care.png";

const Card = () => {
  return (
    <div className="card w-[370px] bg-base-100 hover:shadow-xl px-5">
      <div className="py-7 flex justify-center ">
        <figure className="bg-base-200 h-16 w-16 rounded-full">
          <img src={faceCare} alt="Shoes" className="rounded-xl w-12 h-12" />
        </figure>
      </div>
      <div className=" m-0">
        <h2 className="card-title">Hair Color & Styleing</h2>
        <p>If a dog chews shoes /..whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Card;
