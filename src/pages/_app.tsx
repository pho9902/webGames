import Header from "components/common/Header";
import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "styles/global-style";
import { theme } from "styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
