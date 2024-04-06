import { Metadata } from "next";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import InfoCard from "./components/InfoCard";
import { BsPuzzle } from "react-icons/bs";
import { BiCode } from "react-icons/bi";
import { Introduction } from "./components/Introduction";
import { CgCodeClimate } from "react-icons/cg";
import Image from "next/image";
import { IconBox } from "./components/IconBox";
import { SubSection } from "./components/SubSection";
import { CouserSection } from "./components/CouserSection";
import Banner from "./components/Banner";
import { bannerlist1 } from "@/util/util";
import InstructorSection from "./components/InstructorSection";

export const metadata: Metadata = {
  title: "welcome Students ",
  description: "next home",
};
function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Introduction />
      <SubSection />
      <CouserSection />
      <Banner {...bannerlist1} />
      <InstructorSection />
    </main>
  );
}

export default Home;
