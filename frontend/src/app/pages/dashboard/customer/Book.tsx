import Input from "../../../components/shared/AppInput";

const Book = () => {
  return (
    <div className="px-10 pt-12">
      <Input
        type="text"
        name="name"
        placeholder="Ahan Bryan"
        // width="400px"
        readOnly={true}
      />

      <Input
        type="text"
        name="email"
        placeholder="ahanbryan@gmail.com"
        // width="400px"
        readOnly={true}
      />

      <Input
        type="text"
        name="Tname"
        placeholder="Treatmet name"
        // width="400px"
      />

      <Input
        type="number"
        name="price"
        placeholder="Treatment price"
        // width="400px"
      />
    </div>
  );
};

export default Book;
