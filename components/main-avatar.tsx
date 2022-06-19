import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { avatarClickedCountAtom, avatarClickedLevel } from "@/atoms/others";
import { useEffect, useRef, useState } from "react";
import RainEffect from "./rain-effect";

const avatarVariants = {
  idle: {
    opacity: 0,
    scale: 0,
    rotate: 180,
  },
  start: {
    opacity: 0.7,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5,
      damping: 5,
    },
  },
  hover: {
    scale: 1.1,
    opacity: 1,
  },
  tap: {
    scale: 0.8,
  },
};

export default function MainAvatar() {
  const setAvatarClickedCountState = useSetRecoilState(avatarClickedCountAtom);
  const avatarClickedLevelState = useRecoilValue(avatarClickedLevel);
  const avatarClickedCountState = useRecoilValue(avatarClickedCountAtom);

  const onAvatarClick = () => setAvatarClickedCountState((curr) => (curr += 1));

  const avatarContainerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={avatarContainerRef}
      className="flex justify-center overflow-hidden bg-slate-100 rounded-2xl relative"
    >
      {/* Game */}
      <div className="absolute right-3 bottom-3 z-10 px-2 bg-violet-500 rounded-md p-1 justify-center items-center gap-1 hidden sm:flex">
        <span
          className="text-white cursor-default select-none"
          title={avatarClickedLevelState}
        >
          {avatarClickedCountState}
        </span>
        <span className="text-white cursor-default text-xs whitespace-nowrap select-none">
          {avatarClickedLevelState}
        </span>
      </div>

      {/* Rain effect. */}
      <RainEffect parentRef={avatarContainerRef} />

      {/* Avatar image */}
      <motion.img
        drag={"x"}
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        dragElastic={0.5}
        initial="idle"
        animate="start"
        variants={avatarVariants}
        whileHover="hover"
        whileTap="tap"
        className="rounded-full shadow-sm cursor-pointer z-10"
        src="/assets/codeliners_avatar.jpg"
        width={300}
        height={300}
        alt="Avatar"
        onClick={onAvatarClick}
      />
    </motion.div>
  );
}
