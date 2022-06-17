import { AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { toastsAtom } from "@/atoms/toasts";
import PcToast from "@/components/toasts/pc-toast";
import clazz from "@/libs/clients/clazz";

export default function ToastList() {
  const toasts = useRecoilValue(toastsAtom);

  return (
    <ul
      className={clazz(
        "fixed z-20 pb-2 mx-2 bottom-0 right-0 flex flex-col-reverse gap-2"
      )}
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <PcToast key={toast.id} {...toast} />
        ))}
      </AnimatePresence>
    </ul>
  );
}
