import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import "styles/globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  authors: [{ name: "<AUTHOR>", url: "https://github.com/<GITHUB_USERNAME>" }],
  description: "<DESCRIPTION>",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "firebase",
    "javascript",
    "nextjs",
    "react",
    "tailwindcss",
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
      <body
        className={`${roboto.className} min-h-screen animate-gradient bg-colorful bg-400`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
