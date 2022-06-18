import { useRecoilState, useRecoilValue } from "recoil";
import { toastDisplayTimeAtom, toastsAtom } from "@/atoms/toasts";
import { PcToast } from "@/components/toasts/pc-toast";

export default function useToast() {
  const toastDisplayTimeState = useRecoilValue(toastDisplayTimeAtom);
  const [toasts, setToasts] = useRecoilState(toastsAtom);

  /**
   * Generate new toast id.
   */
  const generateNewToastId = () =>
    toasts.length ? toasts[toasts.length - 1].id + 1 : 0;

  /**
   * Add new toast.
   */
  const addToast = (props: PcToast) => {
    const newToastId = generateNewToastId();

    setTimeout(() => {
      removeToastById(newToastId);
    }, toastDisplayTimeState);

    setToasts((current) => [
      ...current,
      {
        id: newToastId,
        ...props,
      },
    ]);
  };

  /**
   * Remove toast by id.
   */
  const removeToastById = (removeId: number) =>
    setToasts((curr) => curr.filter((toast) => toast.id !== removeId));

  /**
   * Clear toasts.
   */
  const clearToasts = () => {
    if (toasts.length) setToasts([]);
  };

  return {
    addToast,
    clearToasts,
  };
}
