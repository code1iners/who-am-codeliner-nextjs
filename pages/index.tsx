import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ContactList from "@/components/contact-list";
import MyLocation from "@/components/my-location";
import TypingText from "@/components/typing-text";
import { useSetRecoilState } from "recoil";
import { avatarClickedcountAtom } from "@/atoms/others";

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
  const { t: homeT } = useTranslation("home");
  const simpleIntroduceRef = useRef<HTMLParagraphElement>(null);
  const constraintRef = useRef(null);
  const setAvatarClickedCountState = useSetRecoilState(avatarClickedcountAtom);
  useEffect(() => {
    if (simpleIntroduceRef && simpleIntroduceRef.current) {
      simpleIntroduceRef.current.innerHTML = homeT("simple-introduce");
    }
  }, [simpleIntroduceRef, homeT]);

  const onAvatarClick = () => setAvatarClickedCountState((curr) => (curr += 1));

  return (
    <article className="h-full mx-2 my-10 space-y-10 grid grid-cols-2 gap-5">
      <section className="col-start-1 col-end-3 md:col-start-2">
        <motion.div
          ref={constraintRef}
          className="flex justify-center overflow-hidden bg-slate-100 rounded-2xl"
        >
          <motion.img
            drag={"x"}
            dragConstraints={constraintRef}
            dragPropagation
            dragElastic={0.1}
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
        <MyLocation location={homeT("my-location")} />

        {/* Introduce Typing */}
        <TypingText textList={[homeT("hello-title")]} />

        {/* Introduce Description */}
        <p ref={simpleIntroduceRef} className="tracking-wider"></p>

        {/* Contact List */}
        <ContactList />
      </section>
    </article>
  );
};

export default Home;
