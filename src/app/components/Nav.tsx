"use client";
import { useMenuToggle } from "@/state/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";
import MenuBarIcon from "./MenuBarIcon";

const Nav = () => {
  const col = useMenuToggle((state) => state.collapsed);
  const toggle = useMenuToggle((state) => state.menuToggle);
  const router = usePathname();

  const activeLink = router;

  const memu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "contact",
      link: "/contact",
    },
  ];

  return (
    // <nav className="flex items-center justify-between border-b px-20 py-2 shadow-md">
    <nav className="flex flex-col  border-b px-1 py-2 shadow-md md:flex md:flex-row md:items-center md:justify-between md:px-20 md:py-0">
      <div className="flex w-full items-center justify-between md:w-max">
        <h4 className="text-xl font-bold ">Gen-Z Mentor</h4>
        <MenuBarIcon />
      </div>
      {/* <ul className="text flex gap-[36px] font-medium text-gray-400"> */}
      <ul
        className={` flex flex-col py-2 font-medium md:flex md:flex-row md:gap-9 md:text-gray-400 ${col === true ? "hidden" : ""}`}
      >
        {memu.map((item) => (
          <li
            key={item.name}
            className={`w-full rounded-lg p-2 text-center hover:bg-blue-100 ${activeLink === item.link ? "bg-blue-400 text-white" : ""}`}
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {/* <button className="rounded-full bg-primary-900 px-4 py-2 font-medium text-white">
        Try Demo Class
      </button> */}
      <button
        className={`bg-primary-900 rounded-full px-4 py-2 font-medium text-white  ${col === true ? "hidden" : ""} `}
      >
        Try Demo Class
      </button>
    </nav>
  );
};

export default Nav;
