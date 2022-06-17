import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { toastsAtom } from "@/atoms/toasts";
import PcToast from "@/components/toasts/pc-toast";

export default function ToastList() {
  const toasts = useRecoilValue(toastsAtom);

  return (
    <ul className="fixed pb-2 mr-2 bottom-0 right-0 flex flex-col-reverse gap-2 w-[350px]">
      <AnimatePresence>
        {toasts.map((toast) => (
          <PcToast key={toast.id} {...toast} />
        ))}
      </AnimatePresence>
    </ul>
  );
}
