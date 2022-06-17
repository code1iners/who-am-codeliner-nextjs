import { toastDisplayTimeAtom, toastsAtom } from "@/atoms/toasts";
import { PcToast } from "@/components/toasts/pc-toast";
import { useRecoilState, useRecoilValue } from "recoil";

export default function useToast() {
  const toastDisplayTimeState = useRecoilValue(toastDisplayTimeAtom);
  const [toasts, setToasts] = useRecoilState(toastsAtom);

  const generateNewToastId = () =>
    toasts.length ? toasts[toasts.length - 1].id + 1 : 0;

  const addToast = ({ title, message }: PcToast) => {
    if (toasts.length >= 5) return;
    const newToastId = generateNewToastId();

    setTimeout(() => {
      setToasts((curr) => curr.filter((toast) => toast.id !== newToastId));
    }, toastDisplayTimeState);

    setToasts((current) => [
      ...current,
      {
        id: newToastId,
        title,
        message,
      },
    ]);
  };

  return {
    addToast,
  };
}
