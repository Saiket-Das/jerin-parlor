import { Button, Input } from "../../../components/shared/index";

const MakeStaff = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex gap-10 items-center ">
        <Input
          // label="Email"
          type="text"
          name="email"
          placeholder="Search by email"
        />
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default MakeStaff;
