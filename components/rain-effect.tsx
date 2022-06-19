import { motion } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

interface RainEffectProps {
  parentRef: RefObject<HTMLDivElement>;
}

export default function RainEffect({ parentRef }: RainEffectProps) {
  const [rainCount, setRainCount] = useState<number>(0);
  const [rainHeight, setRainHeight] = useState<number>(0);
  useEffect(() => {
    if (parentRef.current) {
      setRainCount(parentRef.current?.clientWidth / 4);
      setRainHeight(parentRef.current?.clientHeight);
    }
  }, [parentRef]);

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
