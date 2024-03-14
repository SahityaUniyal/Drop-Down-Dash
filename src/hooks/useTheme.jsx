import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    document.body.className = "bg-[#E5E5E5] dark:bg-[#0E1015]";
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, toggleTheme];
};
