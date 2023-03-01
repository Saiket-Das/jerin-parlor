import faceCare from "../../../assets/images/face-care.png";

interface Props {
  service: {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    status: string;
  };
}

const BookingListCard = ({
  service: { name, description, status, price, imageUrl },
}: Props) => {
  return (
    <div className="card w-[370px] bg-base-100 hover:shadow-md p-5">
      <div className="flex justify-between">
        <div className="bg-red-50 h-16 w-16 rounded-full flex justify-center items-center">
          <img src={faceCare} alt="Shoes" className="rounded-xl w-12 h-12" />
        </div>

        {status === "Pending" ? (
          <button className="h-10 bg-red-100 text-red-500 font-semibold py-2 px-5 rounded">
            Pending
          </button>
        ) : (
          <button className="h-10 bg-green-100 text-green-500 font-semibold py-2 px-5 rounded">
            Done
          </button>
        )}
      </div>

      <div>
        <h2 className="font-semibold text-xl pt-5">{name}</h2>
        <p className="font-light text-gray-400 mt-2">{description}</p>
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
