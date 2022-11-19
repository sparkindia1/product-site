// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "../utils/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Spark India</title>
      <link rel="icon" href="../public/sparklogo.png" />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
