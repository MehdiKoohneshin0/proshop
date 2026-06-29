import Image from "next/image";
import loader from "@/assets/loader.gif";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen flex-center">
      <Image src={loader} height={80} width={80} alt="Loading..." />
    </div>
  );
};

export default Loading;
