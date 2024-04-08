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
  content?: string;
  list: {
    text: string;
    bullentColor:
      | "bg-primary-900"
      | "bg-pink-900"
      | "bg-voilet-900"
      | "bg-cyan-900";
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

export const bannerlist2: BannerProps = {
  imgUrl: "/assets/banner2.png",
  heading: "What We Offer ?",
  content: "",
  list: [
    {
      text: "Interactive Learning: Engage with hands-on activities, virtual labs, and simulations that bring concepts to life.",
      bullentColor: "bg-primary-900",
    },
    {
      text: "Project-Based Approach: Dive into real-world projects that integrate science, mathematics, programming, and commerce, fostering creativity and problem-solving skills.",
      bullentColor: "bg-pink-900",
    },
    {
      text: "Personalized Curriculum: Tailored learning paths to suit individual needs and interests, ensuring every student thrives.",
      bullentColor: "bg-voilet-900",
    },
    {
      text: "Flexible Options: Choose from in-person or online classes, accommodating diverse learning preferences and schedules.",
      bullentColor: "bg-cyan-900",
    },
  ],
};

export const bannerlist3: BannerProps = {
  imgUrl: "/assets/banner3.png",
  heading: "Our Approach",
  list: [
    {
      text: "Integration of Disciplines: Seamlessly blend physics, mathematics, programming, and commerce to explore interdisciplinary connections.",
      bullentColor: "bg-primary-900",
    },
    {
      text: "Practical Application: Emphasize real-world relevance through practical examples and hands-on experiences.",
      bullentColor: "bg-pink-900",
    },
    {
      text: "Visualization Tools: Utilize visualization techniques to simplify complex concepts and enhance understanding.",
      bullentColor: "bg-voilet-900",
    },
    {
      text: "Critical Thinking Development: Encourage analytical thinking, creativity, and innovation to develop problem-solving skills.",
      bullentColor: "bg-cyan-900",
    },
  ],
};
