import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "development") {
    require("@/mock/index");
  }

  return <Component {...pageProps} />;
}

export default MyApp;
