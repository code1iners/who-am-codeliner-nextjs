import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot, useRecoilValue } from "recoil";
import { SWRConfig } from "swr";
import { makeRotateEffect } from "@ce1pers/use-animation";
import MainHeader from "@/components/layouts/main-header";
import MainFooter from "@/components/layouts/main-footer";
import MainBody from "@/components/layouts/main-body";
import ToastList from "@/components/toasts/toast-list";
import { useEffect } from "react";
import { clazz } from "@ce1pers/use-class";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) =>
      makeRotateEffect({
        x: e.clientX,
        y: e.clientY,
        dotColor: "rgb(26, 188, 156)",
      })
    );

    return () => {
      document.removeEventListener("click", (e: MouseEvent) =>
        makeRotateEffect({ x: e.clientX, y: e.clientY })
      );
    };
  }, []);

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <RecoilRoot>
        <div className="h-screen flex flex-col justify-between overflow-hidden sm:px-20 lg:px-32 xl:px-44">
          <MainHeader />
          <MainBody className="grow no-scroll">
            <Component {...pageProps} />
          </MainBody>
          <MainFooter />

          {/* Toast list */}
          <ToastList />
        </div>
      </RecoilRoot>
    </SWRConfig>
  );
}

export default MyApp;
