type Props = {
  type: string;
  name: string;
  placeholder: string;
  width?: string;
  borderColor?: string;
  style?: any;
  readOnly?: boolean;
};

const AppInput = ({
  type,
  name,
  placeholder,
  width = "380px",
  borderColor = "white",
  readOnly = false,
}: Props) => {
  return (
    <div>
      <div className=" sm:w-1/2" style={{ width: width }}>
        <div className="mb-5">
          <input
            type={type}
            name={name}
            // id="fName"
            readOnly={readOnly}
            placeholder={placeholder}
            className={`
            w-full rounded-md border-${borderColor} bg-white py-3 px-6 text-base outline-none focus:border-primary focus:shadow-sm border-2`}
          />
        </div>
      </div>
    </div>
  );
};

export default AppInput;
