import Button from "../../../components/shared/AppButton";
import Input from "../../../components/shared/AppInput";
import Textarea from "../../../components/shared/AppTextarea";

const Review = () => {
  return (
    <div>
      <Input
        type="text"
        name="Tname"
        placeholder="Enter your name"
        label="Your name"
      />
      <Input
        type="text"
        name="email"
        placeholder="ahanbryan@gmail.com"
        readOnly={true}
        label="Service title"
      />

      <Textarea name="comment" placeholder="Your comment" label="Comment" />

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
