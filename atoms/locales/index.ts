import { atom } from "recoil";

export type Locale = "ko" | "en";

export interface LocaleAtom {
  locale: Locale;
}

export const localeAtom = atom<LocaleAtom>({
  key: "localeAtom",
  default: {
    locale: "en",
  },
});

export default {
  localeAtom,
};
