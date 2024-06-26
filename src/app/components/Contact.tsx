import { cn } from "@/util/util";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";

interface ContactProps extends HTMLAttributes<HTMLElement> {}

const Contact: FC<ContactProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 px-20 md:flex md:flex-row md:justify-between",
        className,
      )}
    >
      <div className="flex flex-col   text-center">
        <img src="/assets/conatact_vector.png" alt="" />
        <p className="text-lg text-gray-500">
          What are you waiting for ?
          <br />
          Give us a call or submit your detail by what'sApp through this form
        </p>
      </div>
      <form action={"#"} className="flex w-full flex-col gap-3 md:w-1/2">
        <input
          type="text"
          placeholder="Enter Name"
          className="rounded-lg bg-primary-200 p-2"
        />
        <input
          type="tel"
          placeholder="Enter Phone No."
          className="rounded-lg bg-primary-200 p-2"
        />
        <input
          type="text"
          placeholder="Enter Subject"
          className="rounded-lg bg-primary-200 p-2"
        />
        <input
          type="submit"
          value={"Submit to whats'aap"}
          className="rounded-full bg-primary-900 p-1 text-lg  text-white"
        />
      </form>
    </div>
  );
};

export default Contact;
