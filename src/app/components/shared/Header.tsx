import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "../ui/DarkModeSwitch";

export default function Header() {
  return (
    <header className="flex justify-evenly items-center p-3 w-full mx-auto bg-gray-500 dark:bg-gray-800">
      <nav className="flex gap-4">
        <MenuItem title="Home" andress="/" Icon={AiFillHome} size={24} />
        <MenuItem
          title="About"
          andress="/about"
          Icon={BsFillInfoCircleFill}
          size={24}
        />
      </nav>
      <div className="flex gap-3 items-center">
        <DarkModeSwitch />
        <Link href={"/"}>
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span className="font-semibold text-xl text-center px-1">Clone</span>
        </Link>
      </div>
    </header>
  );
}
