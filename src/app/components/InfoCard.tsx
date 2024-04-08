import { cn } from "@/util/util";
import { VariantProps, cva } from "class-variance-authority";
import {
  FC,
  HTMLAttributes,
  ReactElement
} from "react";
import { IconType } from "react-icons";

const Background = cva("h-min rounded-sm p-5  md:w-[calc(45%)]", {
  variants: {
    variant: {
      default: "bg-primary-100",
      pink: "bg-pink-100",
      voilet: "bg-voilet-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const IconDiv = cva(
  "flex h-16 w-16 items-center justify-center rounded-full ",
  {
    variants: {
      variant: {
        default: "bg-primary-900",
        pink: "bg-pink-900",
        voilet: "bg-voilet-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface InfoCardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof Background>,
    VariantProps<typeof IconDiv> {
  title: string;
  content: string;
  icon: ReactElement<IconType>;
}

// const InfoCard = () => {
//   return (
//     <div className="bg-primary-100 h-min rounded-sm p-5">
//       <div className="bg-primary-900 h-16 w-16 rounded-full"></div>
//       <p className="text-xl font-medium">Learn Java/C/C++/Python</p>
//       <p className="text-lg">
//         Develop Your Programming skill, learn how to think and approach a coding
//         question.
//       </p>
//     </div>
//   );
const InfoCard: FC<InfoCardProps> = ({
  className,
  variant,
  title,
  icon,
  content,
  ...props
}) => {
  return (
    <div className={cn(Background({ variant }))}>
      <div className={cn(IconDiv({ variant }))}>{icon}</div>
      <p className="text-xl font-medium">{title}</p>
      <p className="text-lg">{content}</p>
    </div>
  );
};

export default InfoCard;
