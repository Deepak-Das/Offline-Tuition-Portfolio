import { cva } from "class-variance-authority";
import { BiLeftArrow } from "react-icons/bi";
import { FaArrowLeftLong } from "react-icons/fa6";

type FeatureProps = {
  title: string;
  content: string;
  arrow?: boolean;
};

const FeatureCard = ({ title, content, arrow }: FeatureProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-sm p-5  md:w-[calc(50%)]">
      <p className="text-2xl font-medium">{title}</p>
      <p className="text-xl ">{content}</p>
      {arrow && <FaArrowLeftLong className="text-primary-900" />}
    </div>
  );
};

export default FeatureCard;
