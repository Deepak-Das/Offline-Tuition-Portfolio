import Image from "next/image";
import { GrDirections } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4  bg-gray-700 px-20 py-10 md:flex md:flex-row md:justify-between">
      <Image src={"assets/logo.svg"} alt="logo.svg" width={150} height={150} />

      <div className="text-white flex flex-col gap-4">
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
            <button className="flex items-center justify-center gap-2 rounded-full bg-primary-900 px-4 py-2 ml-11 text-sm  text-white">
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
