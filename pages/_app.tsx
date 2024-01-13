import type { AppProps } from "next/app";
import "@/styles/reset.css";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Input from "@/components/Input";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Input />
      <Component {...pageProps} />
    </>
  );
}
