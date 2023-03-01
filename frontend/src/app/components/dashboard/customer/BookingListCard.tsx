import faceCare from "../../../assets/images/face-care.png";

interface Props {
  service: {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  };
}

const BookingListCard = ({
  service: { name, description, price, imageUrl },
}: Props) => {
  return (
    <div className=" card w-[370px] bg-base-100 hover:shadow-xl p-5">
      <div className="flex justify-between">
        <div className="bg-primary h-16 w-16 rounded-full flex justify-center items-center">
          <img src={faceCare} alt="Shoes" className="rounded-xl w-12 h-12" />
        </div>

        <button className="h-10 bg-red-200 text-red-500 font-semibold py-2 px-4 rounded">
          Pending
        </button>
      </div>

      <div>
        <h2 className="font-semibold text-xl pt-5">{name}</h2>
        <p className="font-light text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default BookingListCard;

{
  /* <div className="pt-6 flex justify-around">
        <figure className="bg-primary h-16 w-16 rounded-full">
          <img src={faceCare} alt="Shoes" className="rounded-xl w-12 h-12" />
        </figure>

        <button className="bg-transparent h-10 bg-red-300 text-red-500 font-semibold py-2 px-4 border  rounded">
          Button
        </button>
      </div> */
}
