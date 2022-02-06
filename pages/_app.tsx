import type { AppProps } from "next/app";
import Head from "next/head";
import { MoralisProvider } from "react-moralis";
import { DappProvider } from "../contexts/DappContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_MORALIS_APPID}
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL}
        initializeOnMount
      >
        <DappProvider>
          <Component {...pageProps} />
        </DappProvider>
      </MoralisProvider>
    </>
  );
}

export default MyApp;
