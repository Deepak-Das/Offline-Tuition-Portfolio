import Image from "next/image";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { GrDirections } from "react-icons/gr";
import {
  SiFacebook,
  SiInstagram,
  SiTwitter,
  SiYoutube,
  SiYoutubetv,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center  bg-gray-800 px-20 py-10 md:flex md:flex-row md:justify-between">
      <Image src={"assets/logo.svg"} alt="logo.svg" width={150} height={150} />

      <div className="flex w-full justify-between py-4 md:flex md:w-full md:flex-row md:flex-row-reverse md:justify-around ">
        <div className="text-gray-300">
          <h6 className="p-1 text-xl underline ">Links</h6>
          <ul className="flex flex-col items-start justify-center">
            <li className="cursor-pointer rounded-md p-1 text-lg   transition-all duration-75 hover:scale-110 hover:text-primary-900 hover:underline ">
              Home
            </li>
            <li className="cursor-pointer rounded-md p-1 text-lg   transition-all duration-75 hover:scale-110 hover:text-primary-900 hover:underline">
              Course
            </li>
            <li className="cursor-pointer rounded-md p-1 text-lg   transition-all duration-75 hover:scale-110 hover:text-primary-900 hover:underline">
              About
            </li>
            <li className="cursor-pointer rounded-md p-1 text-lg   transition-all duration-75 hover:scale-110 hover:text-primary-900 hover:underline">
              Contact
            </li>
          </ul>
        </div>

        <div className="text-gray-300">
          <h6 className="p-1 text-xl underline ">Social Media</h6>
          <ul className="flex flex-col items-center justify-center">
            <li className="cursor-pointer rounded-md p-1 text-lg transition-all duration-75 hover:scale-110">
              <SiYoutube className="text-3xl text-red-500" />
            </li>
            <li className="cursor-pointer rounded-md p-1 text-lg transition-all duration-75 hover:scale-110">
              <SiTwitter className="text-3xl text-blue-500" />
            </li>
            <li className="cursor-pointer rounded-md p-1 text-lg transition-all duration-75 hover:scale-110">
              <SiInstagram className="text-3xl text-pink-500" />
            </li>
            <li className="cursor-pointer rounded-md p-1 text-lg transition-all duration-75 hover:scale-110">
              <SiFacebook className="text-3xl text-blue-500" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-white md:text-nowrap">
        <h4 className="text-xl underline">
          Call us and get demo class at your place.
        </h4>
        <ul className="text-lg">
          <li className="font-medium text-primary-900">
            <div className="flex items-center gap-2">
              <img src="/assets/call_icon.png" alt="" className="scale-75" />
              <p>8961100212</p>
            </div>
          </li>
          <li className="font-medium text-green-500">
            <div className="flex items-center gap-2">
              <img src="/assets/whatsapp.png" alt="" />

              <p>8961100212</p>
            </div>
          </li>
          <li className=" ">
            <div className="flex items-start gap-2">
              <img src="/assets/map.png" alt="" className="-mt-1 scale-75" />
              <p>
                H/L no. 95/2, Bara shreerampur,
                <br />
                Post :- Naryanpur, Road TCI
              </p>
            </div>
          </li>
          <li>
            <button className="ml-11 flex items-center justify-center gap-2 rounded-full bg-primary-900 px-4 py-2 text-sm  text-white">
              <span>
                <GrDirections />
              </span>
              Direction
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
