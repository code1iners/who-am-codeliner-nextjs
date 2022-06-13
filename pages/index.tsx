import type { NextPage } from "next";
import Image from "next/image";
import ContactList from "../components/contact-list";
import MyLocation from "../components/my-location";
import TypingText from "../components/typing-text";
import Avatar from "../public/assets/codeliners_avatar.jpg";

const Home: NextPage = () => {
  return (
    <article className="h-full mx-2 my-10 space-y-10 grid grid-cols-2 gap-5">
      <section className="col-start-1 col-end-3 md:col-start-2">
        <div className="flex justify-center">
          <Image
            className="rounded-full shadow-sm"
            src={Avatar}
            width={300}
            height={300}
          />
        </div>
      </section>

      <section className="space-y-5 col-start-1 col-end-3 md:row-start-1 md:col-end-2">
        {/* Location */}
        <MyLocation />

        {/* Introduce Typing */}
        <TypingText textList={["Hello i'm Codeliner"]} />

        {/* Introduce Description */}
        <p className="tracking-wider">
          I'm just an ordinary <strong>Software Engineer</strong>. Nowadays my
          interested technology stacks are <strong>NextJS</strong> and{" "}
          <strong>NestJS</strong> with <strong>GraphQL</strong>. I'm having fun
          coding right now. If you are interested in <strong>My project</strong>
          , check out my <strong>Résumé</strong> or <strong>GitHub</strong>{" "}
          below.
        </p>

        {/* Contact List */}
        <ContactList />
      </section>
    </article>
  );
};

export default Home;
