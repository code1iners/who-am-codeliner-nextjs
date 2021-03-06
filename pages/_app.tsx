import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import MainHeader from "@/components/layouts/main-header";
import MainFooter from "@/components/layouts/main-footer";
import MainBody from "@/components/layouts/main-body";
import ToastList from "@/components/toasts/toast-list";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
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
          <MainBody className="grow overflow-y-auto no-scroll">
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
