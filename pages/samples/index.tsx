import { useRouter } from "next/router";
import { motion } from "framer-motion";
import MainContainer from "@/components/layouts/main-container";

const samples = [
  {
    name: "date helpers",
    href: "/samples/calendars",
  },
];

export default function Samples() {
  const router = useRouter();

  return (
    <MainContainer>
      <ul className="grid grid-cols-2 gap-5">
        {samples.map((eachSample) => (
          <motion.li
            key={eachSample.href}
            className="aspect-square border rounded-md shadow-md flex justify-center items-center gap-2 cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(165 180 252, 1)",
              color: "rgb(255 255 255)",
            }}
            whileTap={{ scale: 0.95, backgroundColor: "rgba(99 102 241 1)" }}
            onClick={() => router.push("/samples/calendars")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>

            <button className="text-lg font-extralight tracking-wider">
              Date Helpers
            </button>
          </motion.li>
        ))}
      </ul>
    </MainContainer>
  );
}
