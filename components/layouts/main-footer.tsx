import { useState } from "react";
import PillItem from "./pill-item";

export default function MainFooter() {
  const [stacks, setStacks] = useState([
    "html",
    "css",
    "javascript",
    "react",
    "nextjs",
    "tailwind css",
    "styled component",
    "framer motion",
    "recoil",
    "graphql",
    "apollo client",
    "vue",
    "vuex",
    "nestjs",
    "prisma",
    "typeorm",
    "planet scale",
    "vercel",
    "aws s3",
  ]);

  return (
    <footer className="px-2 pb-2 max-h-[80px] overflow-y-auto flex flex-col items-center space-y-3 no-scroll">
      <div className="w-full border-t"></div>
      <div className="flex items-center gap-2">
        <h1 className="text-sm tracking-wider text-gray-400 cursor-default hover:text-black transition-colors">
          Interested Technology Stacks
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 hover:scale-125 transition"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
        </svg>
      </div>

      <ul className="flex items-center flex-wrap">
        {stacks.map((stack) => (
          <PillItem key={stack} text={stack} />
        ))}
      </ul>
    </footer>
  );
}
