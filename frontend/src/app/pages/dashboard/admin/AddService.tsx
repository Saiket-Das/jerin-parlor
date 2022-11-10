import Button from "../../../components/shared/AppButton";
import Input from "../../../components/shared/AppInput";
import Textarea from "../../../components/shared/AppTextarea";

const AddService = () => {
  return (
    <div>
      <Input type="text" name="name" placeholder="Enter title" />

      <Input type="file" name="price" placeholder="" />

      <Textarea name="comment" placeholder="Enter description" />

      <Button>Submit</Button>
    </div>
  );
};

export default AddService;
