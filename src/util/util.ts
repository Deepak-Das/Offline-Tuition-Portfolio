import { clsx, ClassValue } from "clsx";
// import exp from "constants";
import { twMerge } from "tailwind-merge";

// export function absoluteUrl(path:string){
//     return`${process.env.baseUrl}`
// }

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
