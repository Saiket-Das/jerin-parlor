import Input from "../../../components/shared/AppInput";
import AppTextarea from "../../../components/shared/AppTextarea";

const Book = () => {
  return (
    <div>
      <Input type="text" name="name" placeholder="Ahan Bryan" readOnly={true} />

      <Input
        type="text"
        name="email"
        placeholder="ahanbryan@gmail.com"
        readOnly={true}
      />

      <Input type="text" name="Tname" placeholder="Treatmet name" />

      <Input type="number" name="price" placeholder="Treatment price" />

      <AppTextarea name="comment" placeholder="Your comment" />
    </div>
  );
};

export default Book;
