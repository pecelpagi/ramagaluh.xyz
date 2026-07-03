"use client";

import Navbar from "./Navbar";
import SunClearLine from "@/assets/icons/sun-line.svg";
import MoonClearLine from "@/assets/icons/moon-clear-line.svg";
import { useState } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex justify-between items-center py-4 relative top-3">
      <Navbar />
      <div>
        <button
          type="button"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 ring-1 px-3 ring-zinc-900/5 backdrop-blur shadow-lg shadow-zinc-800/5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {!isDarkMode ? (
            <SunClearLine className="w-[14px] h-[14px]" />
          ) : (
            <MoonClearLine className="w-[14px] h-[14px]" />
          )}
        </button>
      </div>
    </div>
  );
}
