type Props = {
  children: string;
};

const AppButton = ({ children }: Props) => {
  return (
    <button
      type="button"
      className="inline-block px-9 py-3 bg-primary text-white font-medium leading-snug rounded shadow-sm hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out"
    >
      {children}
    </button>
  );
};

export default AppButton;
