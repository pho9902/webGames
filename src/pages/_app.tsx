import Header from "components/common/Header";
import type { AppProps /*, AppContext */ } from "next/app";
import styles from "styles/global.module.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className={styles.global}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
