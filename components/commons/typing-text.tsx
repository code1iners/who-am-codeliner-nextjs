import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypingTextProps {
  textList: string[];
}

export default function TypingText({ textList }: TypingTextProps) {
  const el = useRef(null);

  useEffect(() => {
    let typed: Typed | undefined = undefined;
    if (el.current) {
      typed = new Typed(el.current, {
        strings: textList,
        typeSpeed: 50,
        startDelay: 500,
        backSpeed: 50,
        backDelay: 500,
        smartBackspace: true,
        loop: true,
        showCursor: true,
        cursorChar: "_",
      });
    }

    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, [textList]);

  return (
    <div>
      <span
        className="text-2xl font-bold tracking-wider whitespace-nowrap"
        ref={el}
      ></span>
    </div>
  );
}
