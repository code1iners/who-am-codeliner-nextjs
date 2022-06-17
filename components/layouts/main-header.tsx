import React, { useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Locale, localeAtom } from "@/atoms/locales";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { avatarClickedcountAtom, avatarClickedLevel } from "@/atoms/others";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      duration: 3,
    },
  },
};

export default function MainHeader() {
  const [localeState, setLocaleState] = useRecoilState(localeAtom);
  const avatarClickedLevelState = useRecoilValue(avatarClickedLevel);
  const avatarClickedCountState = useRecoilValue(avatarClickedcountAtom);
  const router = useRouter();

  const emailRef = useRef<HTMLSpanElement>(null);
  const onCopyClick = async () => {
    const text = emailRef.current?.innerText;
    if (text) {
      try {
        await navigator.clipboard.writeText(text);
        alert("The email copied to clipboard.");
      } catch (error) {
        alert("Failed copy the email into clipboard.");
      }
    }
  };

  const onLocaleClick = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    const locale: Locale = currentTarget.innerText.toLowerCase() as Locale;
    if (localeState.locale.toLowerCase() !== locale.toLowerCase()) {
      setLocaleState((curr) => ({ ...curr, locale }));
      router.push("/", "/", { locale });
    }
  };

  return (
    <header className="px-2 py-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              variants={icon}
              initial="hidden"
              animate="visible"
            />
          </svg>
          <h1 className="font-bold hidden sm:inline">Who Am Codeliner</h1>
        </div>

        <div>
          <ul className="flex items-center gap-3">
            <li>
              <button
                className="uppercase tracking-wider text-sm "
                onClick={onLocaleClick}
              >
                ko
              </button>
              {localeState.locale === "ko" && (
                <motion.div
                  className="border border-purple-900 bg-purple-400"
                  layoutId="locale-indicator"
                ></motion.div>
              )}
            </li>
            <li>
              <button
                className="uppercase tracking-wider text-sm "
                onClick={onLocaleClick}
              >
                en
              </button>
              {localeState.locale === "en" && (
                <motion.div
                  className="border border-purple-900 bg-purple-400"
                  layoutId="locale-indicator"
                ></motion.div>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="font-semibold tracking-wider text-xs sm:text-sm flex items-center gap-1 visible">
        <span
          ref={emailRef}
          className="c-hover-md origin-right hidden sm:block"
        >
          codeliner@gmail.com
        </span>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          title="Email Copy"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={onCopyClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </motion.button>
        <div className="bg-violet-500 rounded-md p-1 justify-center items-center hidden sm:flex">
          <span className="text-white cursor-default" title="beginner">
            {avatarClickedCountState} {avatarClickedLevelState}
          </span>
        </div>
      </div>
    </header>
  );
}
