import faceCare from "../../assets/images/face-care.png";

interface Props {
  service: {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
}

const Card = ({ service: { name, description, price, imageUrl } }: Props) => {
  return (
    <div className="card w-[370px] bg-base-100 hover:shadow-xl px-5">
      <div className="pt-7 flex justify-center ">
        <figure className="bg-primary h-16 w-16 rounded-full">
          <img src={faceCare} alt="Shoes" className="rounded-xl w-12 h-12" />
        </figure>
      </div>
      <div className="flex justify-center px-6 pb-6">
        <div className="text-center m-0">
          <h2 className="font-semibold text-xl pt-5">{name}</h2>
          <p className="font-medium text-xl text-primary p-2">{price}</p>
          <p className="font-light text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
