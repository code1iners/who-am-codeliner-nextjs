import useTranslation from "next-translate/useTranslation";

export type LocaleDomain = "common" | "home";

export default function useLocale() {
  const { t: commonT } = useTranslation("common");
  const { t: homeT } = useTranslation("home");

  const t = (domain: LocaleDomain, key: string, vars?: object) => {
    switch (domain) {
      case "common":
        return commonT(key, { ...vars });

      case "home":
        return homeT(key, { ...vars });
    }
  };

  return {
    t,
  };
}
