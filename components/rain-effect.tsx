import { motion } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

interface RainEffectProps {
  parentRef: RefObject<HTMLDivElement>;
}

export default function RainEffect({ parentRef }: RainEffectProps) {
  const [rainCount, setRainCount] = useState<number>(100);
  const [rainHeight, setRainHeight] = useState<number>(0);
  useEffect(() => {
    if (parentRef.current) {
      setRainCount(Math.floor(parentRef.current?.clientWidth / 5));
      setRainHeight(parentRef.current?.clientHeight);
    }
  }, [parentRef]);
  console.log(rainCount, rainHeight);

  return (
    <motion.ul className="absolute top-0 left-0 w-full h-full flex gap-0.5 overflow-hidden">
      {Array.from(Array(rainCount)).map((_, index) => (
        <motion.li
          key={index}
          initial={{
            opacity: 1,
            y: -15,
          }}
          animate={{
            opacity: 0,
            y: rainHeight + 15,
            transition: {
              delay: Math.random(),
              duration: Math.random(),
              repeat: Infinity,
            },
          }}
          className="w-1 h-3 bg-indigo-400 rounded-full"
        />
      ))}
    </motion.ul>
  );
}
