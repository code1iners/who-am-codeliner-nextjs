import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ContactList from "@/components/contact-list";
import MyLocation from "@/components/my-location";
import TypingText from "@/components/typing-text";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { avatarClickedCountAtom, avatarClickedLevel } from "@/atoms/others";
import useLocale from "libs/clients/useLocale";

const avatarVariants = {
  idle: {
    opacity: 0,
    scale: 0,
    rotate: 180,
  },
  start: {
    opacity: 1,
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
    scale: 1.2,
  },
  tap: {
    scale: 0.8,
  },
};

const Home: NextPage = () => {
  const { t } = useLocale();
  const simpleIntroduceRef = useRef<HTMLParagraphElement>(null);
  const constraintRef = useRef(null);
  const setAvatarClickedCountState = useSetRecoilState(avatarClickedCountAtom);
  const avatarClickedLevelState = useRecoilValue(avatarClickedLevel);
  const avatarClickedCountState = useRecoilValue(avatarClickedCountAtom);
  useEffect(() => {
    if (simpleIntroduceRef && simpleIntroduceRef.current) {
      simpleIntroduceRef.current.innerHTML = t("home", "simple-introduce");
    }
  }, [simpleIntroduceRef, t]);

  const onAvatarClick = () => setAvatarClickedCountState((curr) => (curr += 1));

  return (
    <article className="h-full mx-2 my-10 space-y-10 grid grid-cols-2 gap-5">
      <section className="col-start-1 col-end-3 md:col-start-2">
        <motion.div
          ref={constraintRef}
          className="flex justify-center overflow-hidden bg-slate-100 rounded-2xl relative"
        >
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
            className="rounded-full shadow-sm cursor-pointer"
            src="/assets/codeliners_avatar.jpg"
            width={300}
            height={300}
            alt="Avatar"
            onClick={onAvatarClick}
          />
        </motion.div>
      </section>

      <section className="pb-10 space-y-5 col-start-1 col-end-3 md:row-start-1 md:col-end-2">
        {/* Location */}
        <MyLocation location={t("home", "my-location")} />

        {/* Introduce Typing */}
        <TypingText textList={[t("home", "hello-title")]} />

        {/* Introduce Description */}
        <p ref={simpleIntroduceRef} className="tracking-wider"></p>

        {/* Contact List */}
        <ContactList />
      </section>
    </article>
  );
};

export default Home;
