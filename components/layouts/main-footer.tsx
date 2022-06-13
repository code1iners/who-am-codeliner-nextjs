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
    "graphql",
    "framer motion",
    "apollo client",
    "recoil",
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
    <footer className="p-2 max-h-[80px] overflow-y-auto flex flex-col items-center space-y-3">
      <h1 className="text-sm tracking-wider text-gray-400">
        Interested Technology Stacks
      </h1>
      <ul className="flex items-center flex-wrap">
        {stacks.map((stack) => (
          <PillItem text={stack} />
        ))}
      </ul>
    </footer>
  );
}
