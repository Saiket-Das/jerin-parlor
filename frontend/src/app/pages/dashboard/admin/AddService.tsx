import { Button, Input, Textarea } from "../../../components/shared/index";

const AddService = () => {
  return (
    <div>
      <div className="mb-5">
        <Input
          type="text"
          name="name"
          placeholder="Enter title"
          label="Service title"
        />
      </div>

      <div className="mb-5">
        <Input type="file" name="price" placeholder="" label="Image" />
      </div>

      <div className="mb-5">
        <Textarea
          name="comment"
          placeholder="Enter description"
          label="Description"
        />
      </div>

      <Button>Submit</Button>
    </div>
  );
};

export default AddService;
