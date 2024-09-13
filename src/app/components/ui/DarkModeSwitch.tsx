"use client";
import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
export default function DarkModeSwitch() {

  const { theme,setTheme,systemTheme} = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme
  const size = 36
  const buttonStyle = `text-xl cursor-pointer hover:text-amber-500`

  const handleClick = () => {
    setTheme((prev)=> prev === 'dark' ? 'light': 'dark')
  }
  
  return (
    <>
      { currentTheme === "dark" ? (<MdLightMode onClick={handleClick} className={buttonStyle} size={size}/>) :(<MdDarkMode onClick={handleClick} className={buttonStyle} size={size}/>)}
    </>
  );
}
