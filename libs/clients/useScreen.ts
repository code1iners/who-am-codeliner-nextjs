import { useEffect, useState } from "react";

export interface WindowSize {
  width: number;
  height: number;
}

export default function useScreen() {
  const [windowSize, setWindowSize] = useState<WindowSize>();
  useEffect(() => {
    if (window) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  return {
    windowSize,
  };
}
