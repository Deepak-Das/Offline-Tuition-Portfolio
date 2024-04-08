import { Metadata } from "next";
import React from "react";
import Banner from "../components/Banner";
import { bannerlist2, bannerlist3 } from "@/util/util";
import InstructorSection from "../components/InstructorSection";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "About Us",
  description: "Gen-Z mentor the best offline coaching your localatliry",
};
export const About = () => {
  return (
    <div className="flex flex-col gap-y-16">
      <div className=" relative  flex h-64 w-full  flex-col items-center justify-center gap-0  bg-hero-pattern">
        <h2 className="text-3xl font-bold text-primary-900">About</h2>
      </div>
      <div className="relative -top-28 mx-20 -mb-20 rounded-md border bg-white p-6 text-center shadow-md ">
        <h2 className="text-2xl font-medium">
          Welcome to Gen-Z Mentor, where innovation meets education!
        </h2>
        <br />
        <p className="text-lg text-gray-500">
          At Gen-Z Mentor, we're on a mission to revolutionize the way students
          learn physics, mathematics, programming, and commerce. Gone are the
          days of passive lectures and outdated textbooks. We believe in
          hands-on, interactive learning experiences that ignite curiosity,
          foster creativity, and inspire lifelong learners.
        </p>
      </div>

      <Banner {...bannerlist2} bg={"pink"} />
      <Banner {...bannerlist3} bg={"voilet"} dirc={"rtl"} />
      <InstructorSection />
      <Contact className="mb-16" />
    </div>
  );
};

export default About;
