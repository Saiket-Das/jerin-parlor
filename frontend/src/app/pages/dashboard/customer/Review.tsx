import { Button, Input, Textarea } from "../../../components/shared/index";

const Review = () => {
  return (
    <div>
      <div className="mb-5">
        <Input type="text" name="Tname" placeholder="Enter your name" />
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
        <Textarea name="comment" placeholder="Your comment" />
      </div>

      <div className="mb-5">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>

      <Button>Submit</Button>
    </div>
  );
};

export default Review;
