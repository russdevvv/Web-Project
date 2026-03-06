import Lottie from "lottie-react";
import NoAccessAnimation from "@/assets/NoAccessAnimation.json";
const NoAccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Lottie animationData={NoAccessAnimation} className="w-96 h-auto" loop />
    </div>
  );
};

export default NoAccess;
