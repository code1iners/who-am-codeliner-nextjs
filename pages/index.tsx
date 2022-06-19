import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import ContactList from "@/components/home/contact-list";
import MyLocation from "@/components/home/my-location";
import TypingText from "@/components/commons/typing-text";
import useLocale from "@/libs/clients/useLocale";
import MainAvatar from "@/components/home/main-avatar";
import MyProjects from "@/components/home/my-projects";

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
      <section className="pb-10 col-start-1 col-end-3 space-y-5">
        <MyProjects />
      </section>
    </article>
  );
};

export default Home;
