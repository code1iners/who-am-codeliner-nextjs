import { clazz } from "@ce1pers/use-class";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ArrowButtonProps {
  classNames?: string;
  direction?: "left" | "right" | "up" | "down";
  isVisible?: boolean;
  onClick?: () => void;
}

export default function ArrowButton({
  classNames,
  direction = "right",
  isVisible,
  onClick,
}: ArrowButtonProps) {
  const [iconPath, setIconPath] = useState("M9 5l7 7-7 7");

  /**
   * On mounted.
   */
  useEffect(() => {
    switch (direction) {
      case "left":
        setIconPath("M15 19l-7-7 7-7");
        break;

      case "right":
        setIconPath("M9 5l7 7-7 7");
        break;

      case "up":
        setIconPath("M5 15l7-7 7 7");
        break;

      case "down":
        setIconPath("M19 9l-7 7-7-7");
        break;
    }
  }, [direction]);

  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className={clazz(
        "rounded-md p-1 bg-indigo-300 text-white hover:bg-indigo-400",
        isVisible ? "visible" : "invisible",
        classNames ? classNames : ""
      )}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
      </svg>
    </motion.button>
  );
}
