import { TestimonalCard } from "./TestimonalCard";
import { TeacherCard } from "./TeacherCard";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className="mb-16 flex w-full flex-col items-center justify-center gap-4 px-4 md:px-20">
      <div className="flex w-full items-end justify-between">
        <div>
          <h6 className="text-primary-900 underline">All Testimonial</h6>
          <h3 className="text-2xl font-medium">What Student Say about Us ?</h3>
        </div>
        <div className="flex gap-2">
          <FaCircleArrowLeft className="text-3xl text-primary-900" />
          <FaCircleArrowRight className="text-3xl text-primary-900" />
        </div>
      </div>
      <div className=" flex w-full flex-wrap    items-center  justify-center gap-5  md:flex md:flex-wrap md:items-start md:justify-between ">
        <TestimonalCard />
        <TestimonalCard />
        <TestimonalCard />
        <TestimonalCard />
      </div>
    </div>
  );
};

export default Testimonial;
