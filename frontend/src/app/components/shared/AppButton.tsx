import { Link } from "react-router-dom";

type Props = {
  children: string;
  navigate?: string;
  width?: string;
};

const AppButton = ({ children, navigate, width }: Props) => {
  console.log(width);
  return (
    <>
      {navigate ? (
        <Link to={navigate}>
          <button
            type="button"
            className={`inline-block w-[${width}] px-9 py-3 bg-primary text-white font-medium leading-snug rounded shadow-sm hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out`}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          type="button"
          className={`inline-block w-[${width}]  px-9 py-3 bg-primary text-white font-medium leading-snug rounded shadow-sm hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default AppButton;
