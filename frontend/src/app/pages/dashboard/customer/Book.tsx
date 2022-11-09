import Input from "../../../components/shared/AppInput";

const Book = () => {
  return (
    <div className="px-10 pt-12">
      <Input type="text" name="name" placeholder="Ahan Bryan" readOnly={true} />

      <Input
        type="text"
        name="email"
        placeholder="ahanbryan@gmail.com"
        readOnly={true}
      />

      <Input type="text" name="Tname" placeholder="Treatmet name" />

      <Input type="number" name="price" placeholder="Treatment price" />
    </div>
  );
};

export default Book;
