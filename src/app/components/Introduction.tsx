import { BiCode } from "react-icons/bi";
import { GiMaterialsScience } from "react-icons/gi";
import { IoStatsChartOutline } from "react-icons/io5";
import FeatureCard from "./FeatureCard";
import InfoCard from "./InfoCard";
export function Introduction({}) {
  return (
    <div className="flex flex-col gap-5 px-20   md:flex md:flex-row md:items-end">
      <FeatureCard
        title="Great Deals For You"
        content="Learn concept at your on speed, forget about old school technique we
        will guarantee improve your ability of problem solving and boots you
        confident ."
        arrow
      />
      <InfoCard
        title="Learn Java/C/C++/Python"
        content=" Develop Your Programming skill, learn how to think and approach a coding
        question."
        icon={<BiCode className="text-4xl text-white" />}
      />
      <InfoCard
        title="Drill Physics Concept"
        content="Learn the concepts form teacher who are pursuing Phd Degree and alumni of Jadavpur University."
        variant="pink"
        icon={<GiMaterialsScience className="text-4xl text-white" />}
      />
      <InfoCard
        title="Win the Commerce Combact"
        content="What if you got teacher from who have10+ years of experiece in ISC/CBSE school."
        variant="voilet"
        icon={<IoStatsChartOutline className="text-4xl text-white" />}
      />
    </div>
  );
}
