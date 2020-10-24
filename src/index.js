import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Loading from "./App/Components/Loading";
import Store from "./App/Store/";

import "./App/style/App.css";
import "./i18n";

ReactDOM.render(
  <Store>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </Store>,
  document.getElementById("root")
);
