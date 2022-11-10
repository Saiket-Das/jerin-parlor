import Button from "../../../components/shared/AppButton";
import Input from "../../../components/shared/AppInput";

const Book = () => {
  return (
    <div>
      <Input
        type="text"
        name="name"
        placeholder="Ahan Bryan"
        readOnly={true}
        label="Your name"
      />

      <Input
        type="text"
        name="email"
        placeholder="ahanbryan@gmail.com"
        readOnly={true}
        label="Your email"
      />

      <Input
        type="text"
        name="Tname"
        placeholder="Treatment name"
        label="Treatment name"
      />

      <Input
        type="number"
        name="price"
        placeholder="Treatment price"
        label="Service title"
      />

      <Button>Checkout</Button>
    </div>
  );
};

export default Book;
