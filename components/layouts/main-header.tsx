import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import setLanguage from "next-translate/setLanguage";
import { Locale, localeAtom } from "@/atoms/locales";
import useToast from "@/libs/clients/useToast";
import useLocale from "@/libs/clients/useLocale";
import { isMenuModalOpenAtom } from "@/atoms/modals";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      duration: 2.5,
    },
  },
};

const firstMenuBarVariant = {
  show: {
    translateY: [0, 3.5, 3.5],
    rotate: [0, 0, 45],
  },
  hide: {
    translateY: [3.5, 3.5, 0],
    rotate: [45, 0, 0],
  },
};

const secondMenuBarVariant = {
  show: {
    translateY: [0, -3.5, -3.5],
    rotate: [0, 0, -45],
  },
  hide: {
    translateY: [-3.5, -3.5, 0],
    rotate: [-45, 0, 0],
  },
};

export default function MainHeader() {
  const [isMenuDisplay, setIsMenuDisplay] = useRecoilState(isMenuModalOpenAtom);
  const [isEmailCopyAvailable, setIsEmailCopyAvailable] = useState(true);
  const [localeState, setLocaleState] = useRecoilState(localeAtom);
  const router = useRouter();
  const { addToast } = useToast();
  const { t } = useLocale();

  const emailRef = useRef<HTMLSpanElement>(null);
  const onCopyClick = async () => {
    if (!isEmailCopyAvailable) return;

    // Restricts whether emails can be copied.
    setIsEmailCopyAvailable(false);

    const text = emailRef.current?.innerText;
    if (text) {
      try {
        await navigator.clipboard.writeText(text);
        addToast({
          title: t("common", "emails.copy"),
          message: t("common", "emails.copy-success"),
        });
      } catch (error) {
        console.error(error);
        addToast({
          title: t("common", "emails.copy"),
          message: t("common", "emails.copy-failure"),
        });
      }
    }

    // Release whether email can be copied.
    setTimeout(() => setIsEmailCopyAvailable(true), 500);
  };

  const onLocaleClick = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    const locale: Locale = currentTarget.innerText.toLowerCase() as Locale;

    if (localeState.locale.toLowerCase() !== locale.toLowerCase()) {
      setLocaleState((curr) => ({ ...curr, locale }));
      setLanguage(locale);
    }
  };

  return (
    <header className="relative px-2 py-5 flex items-center justify-between z-30">
      <div className="sm:hidden">
        <div
          className="flex flex-col gap-[6px] cursor-pointer"
          onClick={() => setIsMenuDisplay((curr) => !curr)}
        >
          <motion.div
            className="w-4 border-t border-black"
            variants={firstMenuBarVariant}
            animate={isMenuDisplay ? "show" : "hide"}
          />
          <motion.div
            className="w-4 border-t border-black"
            variants={secondMenuBarVariant}
            animate={isMenuDisplay ? "show" : "hide"}
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
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
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          title="Email Copy"
          onClick={onCopyClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </motion.button>
      </div>
    </header>
  );
}
