import { Link } from "react-router-dom";

type Props = {
  children: string;
  navigate?: string;
  width?: string;
  color?: string;
  onClick?: any;
};

const AppButton = ({
  children,
  onClick,
  navigate,
  width,
  color = "bg-primary",
}: Props) => {
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
          className={`inline-block w-[${width}]  px-9 py-3 ${color} text-white font-medium leading-snug rounded shadow-sm hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default AppButton;
