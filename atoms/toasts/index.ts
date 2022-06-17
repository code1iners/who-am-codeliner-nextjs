import { PcToastProps } from "@/components/toasts/pc-toast";
import { atom } from "recoil";

export const toastDisplayTimeAtom = atom({
  key: "toastDisplayTimeAtom",
  default: 3000,
});

export const toastsAtom = atom<PcToastProps[]>({
  key: "toastsAtom",
  default: [],
});
