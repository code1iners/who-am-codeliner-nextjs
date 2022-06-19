import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import ContactList from "@/components/contact-list";
import MyLocation from "@/components/my-location";
import TypingText from "@/components/typing-text";
import useLocale from "libs/clients/useLocale";
import MainAvatar from "@/components/main-avatar";
import { motion } from "framer-motion";

const rainItem = {
  idle: {},
  start: {},
};

const Home: NextPage = () => {
  const { t } = useLocale();
  const simpleIntroduceRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (simpleIntroduceRef && simpleIntroduceRef.current) {
      simpleIntroduceRef.current.innerHTML = t("home", "simple-introduce");
    }
  }, [simpleIntroduceRef, t]);

  return (
    <article className="h-full mx-2 my-10 space-y-10 grid grid-cols-2 gap-5">
      <section className="col-start-1 col-end-3 md:col-start-2">
        {/* Codeliner Avatar */}
        <MainAvatar />
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

      {/* My projects */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {/* BGM Factory */}
        <div className="shadow-md">
          <div className="h-36 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span>BGM Factory</span>
            <span>NextJS, Typescript</span>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Home;
