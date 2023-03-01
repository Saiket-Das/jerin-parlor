import { Button, Input } from "../../../components/shared/index";

const Book = () => {
  return (
    <div>
      <div className="mb-5">
        <Input
          type="text"
          name="name"
          placeholder="Ahan Bryan"
          readOnly={true}
        />
      </div>

      <div className="mb-5">
        <Input
          type="text"
          name="email"
          placeholder="ahanbryan@gmail.com"
          readOnly={true}
        />
      </div>

      <div className="mb-5">
        <Input type="text" name="Tname" placeholder="Treatment name" />
      </div>

      <div className="mb-5">
        <Input type="number" name="price" placeholder="Treatment price" />
      </div>

      <Button>Checkout</Button>
    </div>
  );
};

export default Book;
