import { useRecoilValue } from "recoil";
import { isMenuModalOpenAtom } from "@/atoms/modals";
import { clazz } from "@ce1pers/use-class";
import MainMenuModal from "@/components/modals/main-menu-modal";

interface MainBodyProps {
  className?: string;
  children: React.ReactNode;
}

export default function MainBody({ className, children }: MainBodyProps) {
  const isMenuModalOpen = useRecoilValue(isMenuModalOpenAtom);

  return (
    <main
      className={clazz(
        "relative",
        className ?? "",
        isMenuModalOpen ? "overflow-y-hidden" : "overflow-y-auto"
      )}
    >
      {children}

      {/* Defined main menu modal */}
      <MainMenuModal />
    </main>
  );
}
