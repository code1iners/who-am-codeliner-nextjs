import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainHeader from "../components/layouts/main-header";
import MainFooter from "../components/layouts/main-footer";
import MainBody from "../components/layouts/main-body";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex flex-col justify-between overflow-hidden sm:px-20 lg:px-32 xl:px-44">
      <MainHeader />
      <MainBody className="grow overflow-y-auto no-scroll">
        <Component {...pageProps} />
      </MainBody>
      <MainFooter />
    </div>
  );
}

export default MyApp;
