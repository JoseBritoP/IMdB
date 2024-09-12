import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <nav className="flex gap-4">
        <MenuItem title="Home" andress="/" Icon={AiFillHome} size={24} />
        <MenuItem
          title="About"
          andress="/about"
          Icon={BsFillInfoCircleFill}
          size={24}
        />
      </nav>
      <div className="flex gap-1 items-center">
        <Link href={"/"}>
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span>Clone</span>
        </Link>
      </div>
    </header>
  );
}
