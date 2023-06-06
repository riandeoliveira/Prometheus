import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import "styles/global.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  authors: [{ name: "<AUTHOR>", url: "https://github.com/<GITHUB_USERNAME>" }],
  description: "<DESCRIPTION>",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "css",
    "firebase",
    "javascript",
    "nextjs",
    "react",
    "typescript",
    "zustand",
  ],
  themeColor: [{ color: "#ffffff", media: "(prefers-color-scheme: dark)" }],
  title: "<PROJECT_NAME>",
};

const roboto = Roboto({
  style: "normal",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
