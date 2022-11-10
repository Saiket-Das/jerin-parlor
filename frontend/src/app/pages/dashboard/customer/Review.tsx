import Input from "../../../components/shared/AppInput";
import AppTextarea from "../../../components/shared/AppTextarea";

const Review = () => {
  return (
    <div>
      <Input type="text" name="Tname" placeholder="Your name" />
      <Input
        type="text"
        name="email"
        placeholder="ahanbryan@gmail.com"
        readOnly={true}
      />

      <AppTextarea name="comment" placeholder="Your comment" />

      <div>
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
    </div>
  );
};

export default Review;
