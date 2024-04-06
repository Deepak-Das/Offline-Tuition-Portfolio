import { clsx, ClassValue } from "clsx";
// import exp from "constants";
import { twMerge } from "tailwind-merge";

// export function absoluteUrl(path:string){
//     return`${process.env.baseUrl}`
// }

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type BannerProps = {
  imgUrl: string;
  heading: string;
  content: string;
  list: {
    text: string;
    bullentColor: "bg-primary-900" | "bg-pink-900" | "bg-voilet-900";
  }[];
};

export const bannerlist1: BannerProps = {
  imgUrl: "/assets/banner1.png",
  heading: "Why Choose Gen-Z Mentor ?",
  content:
    "We were come up with the new way of teaching, you just new a smart way of learning , we will develop your critical thinking.",
  list: [
    {
      text: "We don't teach we make it make it easy to conduct.",
      bullentColor: "bg-primary-900",
    },
    {
      text: "Student need right environment, not boring lecture.",
      bullentColor: "bg-pink-900",
    },
    {
      text: "We are young and we know what gen-Z state of mind.",
      bullentColor: "bg-voilet-900",
    },
  ],
};
