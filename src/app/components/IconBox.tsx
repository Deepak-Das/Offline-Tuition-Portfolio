import { cn } from "@/util/util";
import Image from "next/image";
import { FC } from "react";

interface IconBoxProps {
  iconUrl: string;
  sub: string;
  board: string;
  entrnace?: string;
}

export const IconBox: FC<IconBoxProps> = ({
  iconUrl,
  sub,
  board,
  entrnace,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-sm  px-8 py-5 text-gray-500 shadow">
      <img src={iconUrl} alt="" />
      <div className="text-xl font-medium">{sub}</div>
      <div>{board}</div>
      {entrnace && <div>{entrnace}</div>}
    </div>
  );
};
