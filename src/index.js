import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./App/Store/";
import "./App/style/App.css";
ReactDOM.render(
  // <ThemeProvider theme={theme}>
  //   <Bar />
  //   {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  //   <CssBaseline />
  //   {/* <App /> */}
  //   <Divider />
  //   <LocalRouter />
  //   {/* <App  /> */}
  // </ThemeProvider>
  <Store>
    <App />
  </Store>,
  document.querySelector("#root")
);
