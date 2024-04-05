import { cn } from "@/util/util";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

const ChipVariants = cva("font-medium rounded-full  px-5 py-1 text-sm ", {
  variants: {
    variant: {
      active_default: "bg-primary-900  text-white",
      active_pink: " bg-pink-900  text-white",
      active_voilet: "bg-voilet-900  text-white",
      default: "bg-primary-200  text-primary-900",
      pink: " bg-pink-200  text-pink-900",
      voilet: "bg-voilet-200  text-voilet-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ChipsProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ChipVariants> {
  title: string;
}
const Chip: FC<ChipsProps> = ({ className, title, variant, ...props }) => {
  return (
    <button className={cn(ChipVariants({ variant, className }))}>
      {title}
    </button>
  );
};

export default Chip;
