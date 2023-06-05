import { Head, Html, Main, NextScript } from "next/document";

const Document = (): JSX.Element => {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="description" content="<DESCRIPTION>" />
        <meta
          name="keywords"
          content="firebase, javascript, nextjs, react, styled-components, typescript, zustand"
        />
        <meta name="author" content="<AUTHOR>" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
