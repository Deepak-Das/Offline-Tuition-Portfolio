import Chip from "./chips";
import { CourseCard } from "./courseCard";

interface ListType {
  title: string;
  fee: {
    duration: string;
    cls: string;
    amt: string;
  }[];
  chips: {
    name: string;
    variant:
      | "default"
      | "pink"
      | "voilet"
      | "active_default"
      | "active_pink"
      | "active_voilet";
  }[];
}

const ComputerList: ListType[] = [
  {
    fee: [
      {
        duration: "6 Months",
        cls: "Class: X",
        amt: "799/M",
      },
      {
        duration: "6 Months",
        cls: "Class: XI",
        amt: "899/M",
      },
      {
        duration: "6 Months",
        cls: "Class: XII",
        amt: "899/M",
      },
    ],
    title: "Core Java + Boolean Algebra Logic Building.",
    chips: [
      {
        name: "Code",
        variant: "voilet",
      },

      {
        name: "Boolean",
        variant: "pink",
      },
    ],
  },
  {
    title: "C/C++ Programming",
    fee: [
      {
        duration: "6 Months",
        cls: "Class: X",
        amt: "799/M",
      },
      {
        duration: "6 Months",
        cls: "Class: XI",
        amt: "899/M",
      },
      {
        duration: "6 Months",
        cls: "Class: XII",
        amt: "899/M",
      },
    ],
    chips: [
      {
        name: "Code",
        variant: "voilet",
      },

      {
        name: "Boolean",
        variant: "pink",
      },
    ],
  },
];

export function CouserSection({}) {
  return (
    <div className="my-16 flex w-full flex-col items-center justify-center gap-4 px-20">
      <h6 className="text-primary-900 underline">All Courses</h6>
      <h3 className="text-2xl font-medium">Explore Our Popular Batch</h3>
      <div className="flex flex-wrap gap-4">
        <Chip title="Computer" variant="active_default" />
        <Chip title="Physices" />
        <Chip title="Maths" />
        <Chip title="Commerce" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {ComputerList.map((item) => (
          <CourseCard
            // title={item.title}
            // amt={item.amt}
            // duration={item.duration}
            // chips={item.chips}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
