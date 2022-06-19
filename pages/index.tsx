import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactList from "@/components/contact-list";
import MyLocation from "@/components/my-location";
import TypingText from "@/components/typing-text";
import useLocale from "@/libs/clients/useLocale";
import MainAvatar from "@/components/main-avatar";
import SideProjects from "@/components/side-projects";
import MyProjects from "@/components/my-projects";

const Home: NextPage = () => {
  const { t } = useLocale();
  const simpleIntroduceRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (simpleIntroduceRef && simpleIntroduceRef.current) {
      simpleIntroduceRef.current.innerHTML = t("home", "simple-introduce");
    }
  }, [simpleIntroduceRef, t]);

  return (
    <article className="h-full mx-2 my-10 space-y-5 grid grid-cols-2 gap-5">
      <section className="col-start-1 col-end-3 md:col-start-2">
        {/* Codeliner Avatar */}
        <MainAvatar />
      </section>

      <section className="space-y-5 col-start-1 col-end-3 md:row-start-1 md:col-end-2">
        {/* Location */}
        <MyLocation location={t("home", "my-location")} />

        {/* Introduce Typing */}
        <TypingText textList={[t("home", "hello-title")]} />

        {/* Introduce Description */}
        <p ref={simpleIntroduceRef} className="tracking-wider"></p>

        {/* Contact List */}
        <ContactList />
      </section>

      {/* My projects */}
      <section className="pb-10 md:grid-cols-3 col-start-1 col-end-3 space-y-5">
        <MyProjects />
      </section>
    </article>
  );
};

export default Home;
