import "@/styles/globals.css";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import type { AppProps } from "next/app";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme as createMuiTheme,
} from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const muiTheme = createMuiTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <MuiThemeProvider theme={muiTheme}>
        <StyledThemeProvider
          theme={{
            colors: {
              primary: "#111",
              secondary: "#0070f3",
            },
          }}
        >
          <main className={roboto.variable}>
            <Component {...pageProps} />
          </main>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </AppCacheProvider>
  );
}
