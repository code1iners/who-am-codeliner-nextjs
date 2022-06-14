import { Html, Head, Main, NextScript } from "next/document";
import MainFavicon from "@/components/main-favicon";

export default function Document() {
  return (
    <Html>
      <Head>
        <MainFavicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
