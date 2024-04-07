import { bannerlist1 } from "@/util/util";
import { Metadata } from "next";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import { CouserSection } from "./components/CouserSection";
import Hero from "./components/Hero";
import InstructorSection from "./components/InstructorSection";
import { Introduction } from "./components/Introduction";
import { SubSection } from "./components/SubSection";
import Testimonial from "./components/Testimonial";

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
      <Testimonial />
      <Contact />
    </main>
  );
}

export default Home;
