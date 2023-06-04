import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";
import "styles/_global.scss";

const roboto = Roboto({
  style: "normal",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>trocar</title>
      </Head>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
