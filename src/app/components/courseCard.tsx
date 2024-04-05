import { BiMoney } from "react-icons/bi";
import { LuClock } from "react-icons/lu";
import Chip from "./chips";
import { FC } from "react";

interface CourseProps {
  title: string;
  duration: string;
  amt: string;
  chips: chips[];
}
type chips = {
  name: string;
  variant:
    | "default"
    | "pink"
    | "voilet"
    | "active_default"
    | "active_pink"
    | "active_voilet";
};

export const CourseCard: FC<CourseProps> = ({
  title,
  duration,
  amt,
  chips,
}) => {
  return (
    <div className="w-72 flex-col shadow ">
      <div className="flex h-32 flex-col bg-gray-400"></div>
      <div className="flex flex-col gap-2 p-2">
        <h3 className="w-64 text-wrap text-lg font-medium text-black">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {chips.map((item) => (
            <Chip title={item.name} variant={item.variant} />
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-1">
          <div className="flex items-center justify-center gap-2 font-medium">
            <LuClock className="text-pink-900" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center justify-center gap-2 font-medium">
            <BiMoney className="text-pink-900" />
            <span>{amt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
