"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  const currentTheme = theme === "system" ? systemTheme : theme;
  const size = 36;
  const buttonStyle = `text-xl cursor-pointer hover:text-amber-600`;

  const handleClick = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <button onClick={handleClick}>
          <MdLightMode className={buttonStyle} size={size} />
        </button>
      ) : (
        <button onClick={handleClick}>
          <MdDarkMode className={buttonStyle} size={size} />
        </button>
      )}
    </>
  );
}
