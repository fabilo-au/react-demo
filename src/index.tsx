import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./themes";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                refetchOnWindowFocus: false,
                cacheTime: 60 * 1000,
              },
            },
          })
        }
      >
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
