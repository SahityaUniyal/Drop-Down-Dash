import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "../hooks/useTheme";
import { NavLink } from "react-router-dom";
function Header() {
  // nav handles mobile button status
  const [nav, setNav] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const handleNav = () => {
    setNav(!nav);
  };
  const restart = () => {
    console.log("restart");
  };
  const navItems = [
    { id: 1, text: "Play Game", slug: "/" },
    { id: 2, text: "Rules", slug: "/rules" },
    { id: 3, text: "Restart", slug: "" },
  ];

  return (
    <header className="px-4 lg:px-20 h-[5vh] md:h-[8vh] lg:h-[10vh]  flex justify-between items-center bg-[#E84381] dark:bg-[#1B1D23] text-white">
      <h1 className="w-full text-xl font-bold dark:text-gray-300">
        Drop-Down-Dash
      </h1>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-2">
        {navItems.map((item) =>
          item.text == "Restart" ? (
            <li
              key={item.id}
              onClick={restart}
              className="p-4 w-max cursor-pointer hover:text-black dark:hover:text-red-300"
            >
              {item.text}
            </li>
          ) : (
            <li
              key={item.id}
              className="p-4 w-max cursor-pointer hover:text-black dark:hover:text-red-300"
            >
              <NavLink
                to={item.slug}
                className={({ isActive }) =>
                  isActive ? "text-black dark:text-red-300" : ""
                }
              >
                {item.text}
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className="flex mr-3 md:ml-5">
        <button onClick={toggleTheme} className="text-2xl leading-[5vh]">
          {theme === "dark" ? <MdDarkMode /> : <CiLight />}
        </button>
      </div>
      {/* Mobile Navigation Icon */}
      <button onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-[5vh] h-max w-full bg-white dark:bg-[#5F6168] text-black ease-in-out duration-500"
            : "ease-in-out w-full h-max duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Navigation Items */}
        {navItems.map((item) =>
          item.text == "Restart" ? (
            <li
              key={item.id}
              onClick={restart}
              className="p-2 w-full hover:bg-slate-200 dark:hover:bg-gray-200 dark:text-white dark:hover:text-black duration-300 cursor-pointer"
            >
              {item.text}
            </li>
          ) : (
            <NavLink key={item.id} to={item.slug} className="w-full">
              <li className="p-2 w-full hover:bg-slate-200 dark:hover:bg-gray-200 dark:text-white dark:hover:text-black duration-300 cursor-pointer">
                {item.text}
              </li>
            </NavLink>
          )
        )}
      </ul>
    </header>
  );
}

export default Header;
