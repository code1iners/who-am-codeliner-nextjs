import type { NextPage } from "next";
import Image, { ImageProps } from "next/image";
import useTranslation from "next-translate/useTranslation";
import { forwardRef, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ContactList from "@/components/contact-list";
import MyLocation from "@/components/my-location";
import TypingText from "@/components/typing-text";
import Avatar from "@/assets/codeliners_avatar.jpg";

const Home: NextPage = () => {
  const { t: homeT } = useTranslation("home");
  const simpleIntroduceRef = useRef<HTMLParagraphElement>(null);
  const constraintRef = useRef(null);
  useEffect(() => {
    if (simpleIntroduceRef && simpleIntroduceRef.current) {
      simpleIntroduceRef.current.innerHTML = homeT("simple-introduce");
    }
  }, [simpleIntroduceRef, homeT]);

  return (
    <article className="h-full mx-2 my-10 space-y-10 grid grid-cols-2 gap-5">
      <section className="col-start-1 col-end-3 md:col-start-2">
        <motion.div
          ref={constraintRef}
          className="flex justify-center overflow-hidden bg-slate-100 rounded-2xl"
        >
          <motion.img
            drag
            dragConstraints={constraintRef}
            className="rounded-full shadow-sm cursor-pointer"
            src="/assets/codeliners_avatar.jpg"
            width={300}
            height={300}
            alt="Avatar"
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
