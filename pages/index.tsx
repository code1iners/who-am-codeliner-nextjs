import type { NextPage } from "next";
import Image from "next/image";
import ContactList from "@/components/contact-list";
import MyLocation from "@/components/my-location";
import TypingText from "@/components/typing-text";
import Avatar from "@/assets/codeliners_avatar.jpg";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  const { t: homeT } = useTranslation("home");
  const simpleIntroduceRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (simpleIntroduceRef && simpleIntroduceRef.current) {
      simpleIntroduceRef.current.innerHTML = homeT("simple-introduce");
    }
  }, [simpleIntroduceRef, homeT]);

  return (
    <article className="h-full mx-2 my-10 space-y-10 grid grid-cols-2 gap-5">
      <section className="col-start-1 col-end-3 md:col-start-2">
        <div className="flex justify-center">
          <Image
            className="rounded-full shadow-sm"
            src={Avatar}
            width={300}
            height={300}
            alt="Avatar"
          />
        </div>
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
