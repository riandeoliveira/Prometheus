import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import "styles/_global.scss";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  authors: [{ name: "Rian Oliveira", url: "https://github.com/riandeoliveira" }],
  description: "Este é meu projeto.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "context-api",
    "css",
    "firebase",
    "javascript",
    "nextjs",
    "react",
    "typescript"
  ],
  themeColor: [{ color: "#ffffff", media: "(prefers-color-scheme: dark)" }],
  title: "Prometheus",
};

const roboto = Roboto({
  style: "normal",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
