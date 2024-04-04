import { useMenuToggle } from "@/state/store";
import React, { useState } from "react";

const MenuBarIcon = () => {
  const isOpen = useMenuToggle((state) => !state.collapsed);
  const toggle = useMenuToggle((state) => state.menuToggle);

  return (
    <div className="relative h-6 w-6 cursor-pointer md:hidden" onClick={toggle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="absolute left-0 top-0 opacity-0 transition-opacity duration-300"
        style={{ opacity: isOpen ? 0 : 1 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="absolute left-0 top-0 opacity-0 transition-opacity duration-300"
        style={{ opacity: isOpen ? 1 : 0 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default MenuBarIcon;
