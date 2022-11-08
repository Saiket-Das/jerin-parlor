type Props = {
  type: string;
  name: string;
  placeholder: string;
  width?: string;
};

const AppInput = ({ type, name, placeholder, width = "370px" }: Props) => {
  return (
    <div>
      <div className=" px-3 sm:w-1/2" style={{ width: width }}>
        <div className="mb-5">
          <input
            type={type}
            name={name}
            // id="fName"
            placeholder={placeholder}
            className="w-full rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base outline-none focus:border-primary focus:shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AppInput;
