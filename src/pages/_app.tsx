import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
