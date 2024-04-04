import React from "react";
import { IconBox } from "./IconBox";
export function CouserSection({}) {
  return (
    <div className="my-16 flex w-full flex-col items-center justify-center gap-4 px-20">
      <h6 className="text-primary-900">All Courses</h6>
      <h3 className="text-2xl font-medium">Explore Our Popular Batch</h3>
      <div className="flex gap-4">
        <button
          className={`font rounded-full bg-primary-900 px-5 py-1 text-sm text-white  `}
        >
          Computer
        </button>
        <button
          className={`font rounded-full bg-primary-100 px-5 py-1 text-sm text-primary-900   `}
        >
          Science
        </button>
        <button
          className={`font rounded-full bg-primary-100 px-5 py-1 text-sm text-primary-900   `}
        >
          Maths
        </button>
      </div>
      <div className="flex flex-shrink  items-center justify-center gap-5">
        <div className="flex-col shadow">
          <div className="flex h-32 w-full flex-col bg-gray-400"></div>
          <div className="flex flex-col px-4">
            <h3 className="w-64 text-wrap text-lg font-medium text-black">
              Core Java + Boolean Algebra Logic Building.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
