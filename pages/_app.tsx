import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/nucleo-icons.css";
import "../styles/nucleo-svg.css";
import "../styles/material-dashboard.css";

// import "../styles/material-dashboard.css";
// import "../styles/material-dashboard.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
