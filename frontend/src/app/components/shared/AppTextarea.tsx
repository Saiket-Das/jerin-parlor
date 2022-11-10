type Props = {
  label: string;
  name: string;
  placeholder: string;
  width?: string;
  borderColor?: string;
};

const AppTextarea = ({
  label,
  name,
  placeholder,
  width = "380px",
  borderColor = "white",
}: Props) => {
  return (
    <div className="mb-5" style={{ width: width }}>
      <label className="font-medium">{label}</label>

      <textarea
        // id="message"
        id={name}
        rows={5}
        placeholder={placeholder}
        className={`block p-2.5
        w-full rounded-md border-${borderColor} bg-white mt-2 py-3 px-6 text-base outline-none focus:border-primary focus:shadow-sm border-2`}
      ></textarea>
    </div>
  );
};

export default AppTextarea;
