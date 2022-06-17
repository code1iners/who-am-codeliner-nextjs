import { toastDisplayTimeAtom, toastsAtom } from "@/atoms/toasts";
import { motion } from "framer-motion";
import { useRecoilValue, useSetRecoilState } from "recoil";

export interface PcToast {
  title: string;
  message: string;
}

export interface PcToastProps extends PcToast {
  id: number;
}

const itemVariants = {
  idle: {
    y: 30,
    opacity: 0,
  },
  start: {
    y: 0,
    opacity: 1,
  },
  end: {
    x: 300,
    opacity: 0,
    transition: {
      type: "tween",
    },
  },
};

export default function PcToast({
  id,
  title = "Title",
  message = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
    itaque modi enim dolores, unde explicabo,`,
}: PcToastProps) {
  const toastDisplayTimeState = useRecoilValue(toastDisplayTimeAtom);
  const setToasts = useSetRecoilState(toastsAtom);

  const onCloseClick = () =>
    setToasts((curr) => curr.filter((toast) => toast.id !== id));

  return (
    <motion.li
      variants={itemVariants}
      initial="idle"
      animate="start"
      exit="end"
      className="relative flex items-center gap-3 min-h-[100px] w-full bg-slate-200 rounded-md overflow-hidden shadow-md px-5 py-2"
    >
      {/* Icon Column */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* Contents */}
      <div className="grow self-stretch flex flex-col gap-1 mb-1">
        <span className="font-semibold tracking-wider">{title}</span>
        <span className="text-sm">
          {message.length > 100 ? `${message.slice(0, 100)}...` : message}
        </span>
      </div>

      {/* Absolute */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        className="absolute top-2 right-2 h-6 w-6 bg-violet-500 text-white rounded-md"
        onClick={onCloseClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </motion.button>
      <div className="absolute bg-blue-500 h-full w-1.5 z-10 left-0 top-0"></div>
      <div className="absolute bg-violet-300 h-1.5 w-full left-0 bottom-0"></div>
      <motion.div
        initial={{
          left: "-100%",
        }}
        animate={{
          left: 0,
          transition: {
            duration: toastDisplayTimeState / 1000,
            type: "tween",
          },
        }}
        className="absolute bg-violet-500 h-1.5 w-full left-0 bottom-0"
      ></motion.div>
    </motion.li>
  );
}
