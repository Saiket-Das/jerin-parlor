import avatar from "../../assets/images/Hero/hero.jpg";

const Review = () => {
  return (
    <div className="flex flex-wrap -m-3">
      <div className=" p-3">
        <div className="p-6 h-full bg-white bg-opacity-60 rounded-xl">
          <div className="flex flex-col justify-between h-full">
            <div className="mb-5 block">
              <div className="flex flex-wrap mb-4 -m-2">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src={avatar} alt="avatar" />
                  </div>
                </div>
                <div className="w-auto p-2">
                  <h3 className="font-semibold leading-normal">Jacob Jones</h3>
                  <p className="text-gray-500 uppercase">@brooklysim</p>
                </div>
              </div>
              <p className="font-light">
                If you haven&rsquo;t tried out Flaro App yet, I would definitely
                recommend it for both designers and developers
                &#x1F919;&#x1F3FB;
              </p>
            </div>
            <div className="rating mb-3 w-24">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-primary"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-primary"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-primary"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-primary"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-primary"
              />
            </div>

            <div className="block">
              <p className="text-sm text-gray-500 font-medium">3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
