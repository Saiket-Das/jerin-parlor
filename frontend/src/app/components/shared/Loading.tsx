import Lottie from "lottie-react";
import loading from "../../assets/animations/loading.json";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie
        animationData={loading}
        loop={true}
        style={{ height: 300, width: 300 }}
      />
    </div>
  );
};

export default Loading;
