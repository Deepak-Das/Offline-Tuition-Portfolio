import Chip from "./chips";
import { CourseCard } from "./courseCard";
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
        <CourseCard
          amt="790/- per month"
          chips={[
            {
              name: "Code",
              variant: "default",
            },
            {
              name: "Class: X",
              variant: "voilet",
            },
            {
              name: "Boolean",
              variant: "pink",
            },
          ]}
          duration="6 months"
          title="Core Java + Boolean Algebra Logic Building."
        />
      </div>
    </div>
  );
}
