type Props = {
  label?: string;
  type: string;
  name: string;
  placeholder: string;
  width?: string;
  height?: string;
  borderColor?: string;
  readOnly?: boolean;
};

const AppInput = ({
  label,
  type,
  name,
  placeholder,
  width = "380px",
  height,
  borderColor = "white",
  readOnly = false,
}: Props) => {
  return (
    // <div>
    <div className="mb-5" style={{ width: width }}>
      <label className="font-medium">{label}</label>

      <input
        type={type}
        name={name}
        height={height}
        readOnly={readOnly}
        placeholder={placeholder}
        className={`w-full h-[${height}] rounded-md border-${borderColor} bg-white mt-2 py-3 px-6 text-base outline-none focus:border-primary focus:shadow-sm border-2`}
      />
    </div>
    // </div>
  );
};

export default AppInput;
