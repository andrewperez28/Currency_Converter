"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const borderColor = theme === "dark" ? "border-white" : "border-black";

  return (
    <div>
      <button
        className={`dark:${borderColor} border-2 p-2 m-2`}
        onClick={() => setTheme("light")}
      >
        Light Mode
      </button>
      <button
        className={`dark:${borderColor} border-2 p-2 m-2`}
        onClick={() => setTheme("dark")}
      >
        Dark Mode
      </button>
    </div>
  );
}
