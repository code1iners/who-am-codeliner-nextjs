import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainHeader from "../components/layouts/main-header";
import MainFooter from "../components/layouts/main-footer";
import MainBody from "../components/layouts/main-body";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex flex-col justify-between sm:px-20 lg:px-32 xl:px-44">
      <MainHeader />
      <MainBody className="grow">
        <Component {...pageProps} />
      </MainBody>
      <MainFooter />
    </div>
  );
}

export default MyApp;
