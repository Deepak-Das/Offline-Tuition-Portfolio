import React from "react";
import { IconBox } from "./IconBox";
export function SubSection({}) {
  return (
    <div className=" flex w-full flex-col items-center justify-center gap-4 px-20">
      <h6 className="text-primary-900 underline">All Subject</h6>
      <h3 className="text-2xl font-medium">Explore Our Subject</h3>
      <div className="flex  flex-wrap  items-center justify-center gap-5">
        <IconBox
          iconUrl="/assets/code.svg"
          sub="Computer"
          board="ICSE/ISC/B-TECH"
        />
        <IconBox
          iconUrl="/assets/physics.svg"
          sub="Physics"
          board="ICSE/ISC/B-TECH"
          entrnace="JEE,Main"
        />
        <IconBox
          iconUrl="/assets/commerce.svg"
          sub="Commcerce"
          board="ICSE/ISC/B-TECH "
        />
      </div>
      <button
        className={`rounded-full bg-primary-900 px-4 py-2 font-medium text-white  `}
      >
        Try Demo Class
      </button>
    </div>
  );
}
