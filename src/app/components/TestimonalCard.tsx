import React from "react";
export function TestimonalCard({}) {
  return <div className="flex w-80 flex-col gap-2 rounded-md border p-4 shadow-md">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary-900"></div>
            <div className="flex flex-col">
              <p className="text-xl font-medium">Sahil Yadav</p>
              <p className="text-lg text-primary-900">B-Tech</p>
            </div>
          </div>
          <p className=" text-lg text-gray-500">
            Great place to build your skill in Programming. i stuggle in logic
            build but they make the proccess very easy
          </p>
        </div>;
}
  