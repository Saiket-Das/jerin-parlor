import AppButton from "../../../components/shared/AppButton";
import Input from "../../../components/shared/AppInput";

const MakeStaff = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex gap-10 items-center ">
        <Input
          label="Email"
          type="text"
          name="email"
          placeholder="Search by email..."
        />
        <AppButton>Submit</AppButton>
      </div>
    </div>
  );
};

export default MakeStaff;
