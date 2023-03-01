import { Button, Input, Textarea } from "../../../components/shared/index";

const AddService = () => {
  return (
    <div>
      <div className="md:flex lg:flex md:gap-20 lg:flex-20">
        <div className="mb-5">
          <Input
            type="text"
            name="title"
            placeholder="Enter title"
            label="Service title"
          />
        </div>

        <div className="mb-5">
          <Input
            type="number"
            name="price"
            placeholder="Enter price"
            label="Service price"
          />
        </div>
      </div>

      <div className="md:flex lg:flex md:gap-20 lg:flex-20">
        <div className="mb-5">
          <Input type="file" name="price" placeholder="" label="Image" />
        </div>

        <div className="mb-5">
          <Input
            type="text"
            name="time"
            placeholder="Choose available time"
            label="Service time"
          />
        </div>
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
