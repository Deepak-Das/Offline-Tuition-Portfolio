import { Metadata } from "next";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import InfoCard from "./components/InfoCard";
import { BsPuzzle } from "react-icons/bs";
import { BiCode } from "react-icons/bi";
import { Introduction } from "./components/Introduction";

export const metadata: Metadata = {
  title: "welcome Students ",
  description: "next home",
};
function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Introduction />
    </main>
  );
}

export default Home;
