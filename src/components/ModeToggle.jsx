import React, { useState, useEffect, useRef } from "react";
import { FiMoon, FiSun, FiCheck } from "react-icons/fi";
import { useTheme } from "../context/ThemeProvider.jsx";
import { RiArrowDropDownLine } from "react-icons/ri";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const modes = [
    { id: "light", label: "Light", icon: <FiSun /> },
    { id: "dark", label: "Dark", icon: <FiMoon /> },
    { id: "system", label: "System", icon: null },
  ];

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Toggle theme"
        className="relative flex items-center justify-center w-10 h-10 rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
      >
        <FiSun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-yellow-500" />
        <FiMoon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-indigo-400" />
        <span className="sr-only">Toggle theme</span>
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-36 origin-top-right rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 text-sm text-gray-700 dark:text-gray-100">
            {modes.map(({ id, label, icon }) => {
              const selected = theme === id;
              return (
                <button
                  key={id}
                  onClick={() => {
                    setTheme(id);
                    setOpen(false);
                  }}
                  className={`flex items-center gap-2 w-full px-4 py-2 text-left rounded-md transition
                    ${
                      selected
                        ? "bg-indigo-600 text-white dark:bg-indigo-500"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500`}
                >
                  {icon && (
                    <span
                      className={`flex items-center justify-center w-5 h-5 ${
                        selected
                          ? "text-white"
                          : "text-gray-400 dark:text-gray-500"
                      }`}
                    >
                      {icon}
                    </span>
                  )}
                  <span className="capitalize flex-grow">{label}</span>
                  {selected && (
                    <FiCheck
                      className="w-5 h-5 text-white dark:text-gray-200"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
