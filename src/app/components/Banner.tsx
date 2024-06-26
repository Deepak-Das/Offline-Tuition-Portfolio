import { cn } from "@/util/util";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import React, { FC, HTMLAttributes, HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const BannerVariants = cva(
  "flex flex-col items-center justify-center gap-10 md:rounded-lg  p-10 md:mx-24  md:flex md:flex-row md:gap-20",
  {
    variants: {
      bg: {
        defualt: "bg-primary-200",
        pink: "bg-pink-200",
        voilet: "bg-voilet-200",
      },
      dirc: {
        ltr: "",
        rtl: "md:flex-row-reverse",
      },
    },
    defaultVariants: {
      bg: "defualt",
      dirc: "ltr",
    },
  },
);

interface BannerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof BannerVariants> {
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
}

const Banner: FC<BannerProps> = ({
  imgUrl,
  heading,
  content,
  list,
  bg,
  dirc,
  className,
  ...props
}) => {
  return (
    <div className={cn(BannerVariants({ bg, dirc, className }))}>
      <Image src={imgUrl} alt="banner.jpg" height={0} width={600} />
      <div className="flex flex-col items-start justify-start gap-4 md:gap-4">
        <h4 className="text-3xl font-medium">{heading}</h4>
        {content && <p className="text-xl">{content}</p>}
        {list.map((item) => (
          <div className="flex gap-2">
            <div
              className={twMerge([
                "mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-primary-900",
                "mt-2 h-3 w-3 flex-shrink-0 rounded-full ",
                item.bullentColor,
              ])}
            ></div>
            <p className="text-xl font-medium text-black">{item.text}</p>
          </div>
        ))}
        {/* 
        <div className="flex gap-2">
          <div className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-voilet-900"></div>
          <p className="text-xl font-medium text-black">
            We are young and we know what gen-Z state of mind.{" "}
          </p>
        </div> */}
        <button
          className={`rounded-full bg-primary-900 px-4 py-2 font-medium text-white `}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Banner;
