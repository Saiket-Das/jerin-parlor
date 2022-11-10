import Button from "../../../components/shared/AppButton";
import Input from "../../../components/shared/AppInput";

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

      <Button>Checkout</Button>
    </div>
  );
};

export default Book;
