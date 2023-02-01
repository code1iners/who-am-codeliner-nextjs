import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { isMenuModalOpenAtom } from "@/atoms/modals";
import { useRouter } from "next/router";

const modalVariant = {
  hide: {
    y: "-100%",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

const services = [
  {
    name: "samples",
    href: "samples",
  },
];

export default function MainMenuModal() {
  const router = useRouter();

  const [isMenuModalOpen, setIsMenuModalOpen] =
    useRecoilState(isMenuModalOpenAtom);

  const onServiceButtonClick = (serviceHref: string) => {
    setIsMenuModalOpen(false);
    router.push(serviceHref);
  };

  return (
    <motion.div
      id="main-modal"
      className="fixed top-[68px] left-0 w-full h-full bg-slate-900 text-white z-20"
      variants={modalVariant}
      animate={isMenuModalOpen ? "show" : "hide"}
      transition={{ duration: 0.5 }}
    >
      <ul className="p-10 divide-y divide-gray-400 space-y-3 overflow-y-auto">
        {services.map((service) => (
          <li key={service.href} className="pt-2">
            <button
              className="text-gray-100 font-light tracking-widest capitalize"
              onClick={() => onServiceButtonClick(service.href)}
            >
              {service.name}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
