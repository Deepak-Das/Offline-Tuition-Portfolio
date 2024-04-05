import { BiMoney } from "react-icons/bi";
import { LuClock } from "react-icons/lu";
import Chip from "./chips";
import { FC } from "react";
import { MdClass } from "react-icons/md";

interface CourseProps {
  title: string;
  fee: {
    duration: string;
    cls: string;
    amt: string;
  }[];
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

export const CourseCard: FC<CourseProps> = ({ title, fee, chips }) => {
  return (
    <div className="w-72 flex-col rounded-sm shadow-md">
      <div className="flex h-40 flex-col bg-gray-400"></div>
      <div className="flex flex-col gap-2 p-2">
        <h3 className="h-14 w-64 text-wrap text-lg font-medium text-black ">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {chips.map((item) => (
            <Chip title={item.name} variant={item.variant} />
          ))}
        </div>
        {fee.map((item) => (
          <div className=" flex flex-wrap justify-between gap-1 border-t pt-2">
            <div className="flex items-center justify-center gap-1 font-medium">
              <LuClock className="text-pink-900" />
              <span>{item.duration}</span>
            </div>
            <div className="flex items-center justify-center gap-1 font-medium">
              <MdClass className="text-pink-900" />
              <span className="text-cyan-500">{item.cls}</span>
            </div>
            <div className="flex items-center justify-center gap-1 font-medium">
              <BiMoney className="text-pink-900" />
              <span className="text-cyan-500">{item.amt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
