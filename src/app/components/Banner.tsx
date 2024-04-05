import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col  items-center justify-center rounded-lg bg-primary-200 p-10 md:mx-24 md:mb-20 md:flex md:flex-row md:gap-20">
      <Image
        src="/assets/banner1.png"
        alt="banner.jpg"
        height={0}
        width={600}
      />
      <div className="flex flex-col justify-start md:gap-4">
        <h4 className="text-3xl font-medium">Why Choose Gen-Z Mentor ?</h4>
        <p className="text-xl">
          We were come up with the new way of teaching, you just new a smart way
          of learning , we will develop your critical thinking.
        </p>
        <div className="flex gap-2">
          <div className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-primary-900"></div>
          <p className="text-xl font-medium text-black">
            We don't teach we make it make it easy to conduct.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-pink-900"></div>
          <p className="text-xl font-medium text-black">
            Student need right environment, not boring lecture.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-voilet-900"></div>
          <p className="text-xl font-medium text-black">
            We are young and we know what gen-Z state of mind.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
