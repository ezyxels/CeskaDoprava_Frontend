import { globalConfig } from "@configs/globalConfig";
import NextHead from "next/head";

export default function Head() {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="author" content={globalConfig.meta.author} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      {/* Theme color */}
      {/* <meta name="theme-color" content="#F8FAFC" /> */}
    </NextHead>
  );
}
