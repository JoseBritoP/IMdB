"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleDeleteSearchTerm = () => {
    if (!search.length) return;
    setSearch("");
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("")
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="pt-2 flex justify-between px-10 max-w-2xl mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full border-2 rounded-lg">
        <input
          type="text"
          placeholder="Search keywords..."
          className="w-full h-10 px-4 rounded-md placeholder-gray-200 dark:placeholder-gray-500 outline-none bg-transparent flex-1 "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex justify-center items-center gap-x-2">
          <button
            className="text-amber-600 transition-colors duration-100 ease-out disabled:text-gray-400 pl-2"
            disabled={search === ""}
          >
            <FaMagnifyingGlass size={25} />
          </button>
          <button
            onClick={handleDeleteSearchTerm}
            disabled={search.length === 0}
            className="disabled:text-gray-400 text-red-600 pr-2"
          >
            <RxCross2 size={32} />
          </button>
        </div>
      </div>
    </form>
  );
}
